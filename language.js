"use strict";

// Select the bundled page before interactive.js initialises its controls.
// Reloading through the language link keeps the URL shareable and works offline.
(() => {
  const url = new URL(window.location.href);
  const requested = (url.searchParams.get("lang") || "hu").toLowerCase();
  const english = requested === "eng" || requested === "en";
  const strings = english ? {
    locale: "en-GB",
    title: "Practical Notes on Data Analysis and Statistical Inference",
    subtitle: "Psychology BSc – Interactive study notes",
    description: "From scientific thinking through hypothesis testing to t-tests",
    contents: "Contents",
    footer: "Interactive teaching notes",
    unanswered: "You have not answered this question yet.",
    correct: "Correct answer!",
    incorrect: "Incorrect answer.",
    correctAnswer: "Correct answer: ",
    result: "Score",
    answered: "Questions answered",
    percentage: "Percentage correct",
    zScore: "z-score",
    lowDispersion: "Low dispersion",
    highDispersion: "High dispersion"
  } : {
    locale: "hu-HU",
    title: "Adatelemzés és statisztikai következtetés gyakorlati jegyzet",
    subtitle: "Pszichológia BSc – Interaktív tanulási jegyzet",
    description: "A tudományos gondolkodástól a hipotézisvizsgálaton át a t-próbákig",
    contents: "Tartalomjegyzék",
    footer: "Interaktív oktatási jegyzet",
    unanswered: "Erre a kérdésre még nem válaszoltál.",
    correct: "Helyes válasz!",
    incorrect: "Helytelen válasz.",
    correctAnswer: "Helyes válasz: ",
    result: "Eredmény",
    answered: "Megválaszolt kérdések",
    percentage: "Helyes válaszok aránya",
    zScore: "z-pontszám",
    lowDispersion: "Kis szóródás",
    highDispersion: "Nagy szóródás"
  };

  if (english) {
    const page = JSON.parse(document.getElementById("english-page-data").textContent);
    document.querySelector("main").innerHTML = page.html;
    document.getElementById("tocLinks").innerHTML = page.navigation;
  }

  document.documentElement.lang = english ? "en" : "hu";
  document.title = strings.title;
  document.getElementById("courseTitle").textContent = strings.title;
  document.getElementById("courseSubtitle").textContent = strings.subtitle;
  document.getElementById("courseDescription").textContent = strings.description;
  document.getElementById("tocTitle").textContent = strings.contents;
  document.getElementById("courseNavigation").setAttribute("aria-label", strings.contents);
  document.getElementById("footerTitle").textContent = strings.title;
  document.getElementById("footerDescription").textContent = strings.footer;

  const link = document.getElementById("languageSwitch");
  url.searchParams.set("lang", english ? "hu" : "eng");
  link.href = url.href;
  link.textContent = english ? "Magyar" : "English";
  link.lang = english ? "hu" : "en";
  link.hreflang = link.lang;
  window.courseLanguage = { english, ...strings };
})();
