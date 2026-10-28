window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true
  },
  svg: { fontCache: 'global' }
};

"use strict";

const ui = window.courseLanguage;

// Number formatting follows the selected language.
const hu = (x, digits=2) =>
  Number(x).toLocaleString(ui.locale, {
    minimumFractionDigits:digits,
    maximumFractionDigits:digits
  });

// LaTeX-számformátum tizedesvesszővel.
function latexNumber(value, digits=2){
  const number = Number(value).toFixed(digits);
  return ui.english ? number : number.replace(".", "{,}");
}

// MathJax újrarenderelése dinamikus tartalomnál.
function typesetMath(element){
  if(!window.MathJax?.typesetPromise) return;

  if(window.MathJax.typesetClear){
    window.MathJax.typesetClear([element]);
  }

  window.MathJax.typesetPromise([element]).catch(err=>{
    console.error("MathJax rendering error:",err);
  });
}

// Standardhiba-kalkulátor.
const nSlider = document.getElementById("sampleSize");
const sdSlider = document.getElementById("sdRange");

function updateSE(){
  const n = Number(nSlider.value);
  const sd = Number(sdSlider.value);
  const se = sd / Math.sqrt(n);

  document.getElementById("nLabel").textContent = n;
  document.getElementById("sdLabel").textContent = sd;
  document.getElementById("seOutput").textContent = hu(se);

  const calculation =
    document.getElementById("seCalculation");

  // MathJax előző renderelésének törlése.
  if(window.MathJax?.typesetClear){
    window.MathJax.typesetClear([calculation]);
  }

  calculation.textContent =
    "\\[" +
    "\\widehat{SE}_{\\bar{x}}=" +
    "\\frac{" + sd + "}{\\sqrt{" + n + "}}=" +
    latexNumber(se) +
    "\\]";

  if(window.MathJax?.typesetPromise){
    window.MathJax.typesetPromise([calculation]).catch(console.error);
  }

  const width = Math.min(570,Math.max(3,se/16*570));
  document.getElementById("seBar")
    .setAttribute("width",width);
}

nSlider.addEventListener("input",updateSE);
sdSlider.addEventListener("input",updateSE);
updateSE();

// Interaktív t-próba-választó.
const explanations = JSON.parse(document.getElementById("explanations-data").textContent);

function updateTestChoice(){
  const selected =
    document.querySelector('input[name="design"]:checked').value;

  document.getElementById("testExplanation").innerHTML =
    explanations[selected];
}

document.querySelectorAll('input[name="design"]')
  .forEach(el=>el.addEventListener("change",updateTestChoice));

updateTestChoice();

// Gyakorlófeladatok.
const questions = JSON.parse(document.getElementById("quiz-data").textContent);

const quizContainer = document.getElementById("quiz");

function renderQuiz(){
  quizContainer.innerHTML = questions.map((item,i)=>`
    <div class="question">
      <h4>${i+1}. ${item.q}</h4>
      ${item.opts.map((opt,j)=>`
        <label class="option">
          <input type="radio" name="q${i}" value="${j}">
          ${opt}
        </label>
      `).join("")}
      <div id="feedback${i}" aria-live="polite"></div>
    </div>
  `).join("");

  document.getElementById("quizScore").innerHTML = "";
}

function gradeQuiz(){
  let score = 0;
  let answered = 0;

  questions.forEach((item,i)=>{
    const selected =
      document.querySelector(`input[name="q${i}"]:checked`);

    const feedback =
      document.getElementById(`feedback${i}`);

    if(!selected){
      feedback.className = "feedback incorrect";
      feedback.textContent =
        ui.unanswered;
      return;
    }

    answered++;
    const chosen = Number(selected.value);
    const correct = chosen === item.correct;

    if(correct) score++;

    feedback.className =
      "feedback " + (correct?"correct":"incorrect");

    feedback.innerHTML = `
      <strong>${correct?ui.correct:
        ui.incorrect}</strong><br>
      ${!correct?ui.correctAnswer+
        item.opts[item.correct]+"<br>":""}
      ${item.explanation}
    `;
  });

  document.getElementById("quizScore").innerHTML = `
    <div class="widget">
      <h3>${ui.result}: ${score} / ${questions.length}</h3>
      <p>${ui.answered}: ${answered} / ${questions.length}</p>
      <p>${ui.percentage}:
      ${Math.round(score/questions.length*100)}%</p>
    </div>
  `;
}

document.getElementById("gradeBtn")
  .addEventListener("click",gradeQuiz);

document.getElementById("resetBtn")
  .addEventListener("click",renderQuiz);

renderQuiz();

// Pontos normális sűrűségfüggvény.
function normalPDF(x,mu=0,sigma=1){
  const z=(x-mu)/sigma;
  return Math.exp(-0.5*z*z)/
    (sigma*Math.sqrt(2*Math.PI));
}

function svgEl(name,attrs={},textContent=null){
  const ns="http://www.w3.org/2000/svg";
  const el=document.createElementNS(ns,name);

  for(const [key,value] of Object.entries(attrs)){
    el.setAttribute(key,String(value));
  }

  if(textContent!==null){
    el.textContent=textContent;
  }

  return el;
}

function drawNormalChart(){
  const svg=document.getElementById("normalChart");
  svg.replaceChildren();

  const left=30,right=590,top=20,bottom=195;
  const xMin=-3.5,xMax=3.5;
  const maxDensity=normalPDF(0);

  const sx=x=>left+(x-xMin)/(xMax-xMin)*(right-left);
  const sy=y=>bottom-y/maxDensity*(bottom-top);

  svg.appendChild(svgEl("line",{
    x1:left,y1:bottom,x2:right,y2:bottom,
    stroke:"#536477"
  }));

  // A görbe alatti terület ±1 SD között.
  let fillPath=`M ${sx(-1)} ${bottom}`;
  for(let x=-1;x<=1.001;x+=0.02){
    fillPath+=` L ${sx(x)} ${sy(normalPDF(x))}`;
  }
  fillPath+=` L ${sx(1)} ${bottom} Z`;

  svg.appendChild(svgEl("path",{
    d:fillPath,fill:"#245bb4",opacity:0.17
  }));

  let path="";
  for(let i=0;i<=350;i++){
    const x=xMin+i/350*(xMax-xMin);
    path+=(i===0?"M":" L")+
      `${sx(x)} ${sy(normalPDF(x))}`;
  }

  svg.appendChild(svgEl("path",{
    d:path,fill:"none",
    stroke:"#245bb4","stroke-width":3
  }));

  svg.appendChild(svgEl("line",{
    x1:sx(0),y1:top,x2:sx(0),y2:bottom,
    stroke:"#536477","stroke-dasharray":"5 5"
  }));

  for(let z=-3;z<=3;z++){
    svg.appendChild(svgEl("line",{
      x1:sx(z),y1:bottom,
      x2:sx(z),y2:bottom+6,
      stroke:"#536477"
    }));

    svg.appendChild(svgEl("text",{
      x:sx(z),y:bottom+24,
      "text-anchor":"middle",
      "font-size":14,fill:"currentColor"
    },String(z)));
  }

  svg.appendChild(svgEl("text",{
    x:310,y:244,
    "text-anchor":"middle",
    "font-size":14,fill:"currentColor"
  },ui.zScore));
}

function drawDispersionChart(){
  const svg=document.getElementById("dispersionChart");
  svg.replaceChildren();

  const panels=[
    {left:20,right:295,mu:0,sigma:0.65,color:"#087b57",
     label:ui.lowDispersion},
    {left:325,right:600,mu:0,sigma:1.5,color:"#245bb4",
     label:ui.highDispersion}
  ];

  for(const panel of panels){
    const bottom=145,top=20;
    const xMin=-4,xMax=4;
    const maxDensity=normalPDF(0,0,0.65);

    const sx=x=>panel.left+
      (x-xMin)/(xMax-xMin)*(panel.right-panel.left);

    const sy=y=>bottom-y/maxDensity*(bottom-top);

    svg.appendChild(svgEl("line",{
      x1:panel.left,y1:bottom,
      x2:panel.right,y2:bottom,
      stroke:"#536477"
    }));

    let path="";
    for(let i=0;i<=300;i++){
      const x=xMin+i/300*(xMax-xMin);
      const y=normalPDF(x,panel.mu,panel.sigma);
      path+=(i===0?"M":" L")+`${sx(x)} ${sy(y)}`;
    }

    svg.appendChild(svgEl("path",{
      d:path,fill:"none",
      stroke:panel.color,"stroke-width":3
    }));

    svg.appendChild(svgEl("text",{
      x:(panel.left+panel.right)/2,y:173,
      "text-anchor":"middle",
      "font-size":14,fill:"currentColor"
    },panel.label));
  }
}

drawNormalChart();
drawDispersionChart();
