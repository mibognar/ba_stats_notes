<!-- Keep section and widget markers. See README.md for editing instructions. -->

<!-- section: s1 -->


## 1. A tudományos gondolkodás és a statisztika szerepe

A pszichológia empirikus tudomány: célja az emberi viselkedés,
a megismerés és az érzelmek megértése szisztematikus
megfigyelések és mérések segítségével.

A pszichológiai jelenségek összetettek, az emberi viselkedés
pedig jelentős változatosságot mutat az egyének és helyzetek
között. Egy valódi pszichológiai hatás sem feltétlenül figyelhető
meg minden egyénnél vagy minden mérés során.


::: note
**A statisztika célja:**


a megfigyelt adatok összefoglalása, a populációs jellemzők
becslése és a tudományos hipotézisek vizsgálata a
bizonytalanság figyelembevételével.
:::

Például egy kutató vizsgálhatja azt, hogy az alvásmegvonás
rontja-e az emlékezeti teljesítményt. Még ha az alvásmegvonás
után valóban alacsonyabb átlagot is talál, **meg kell vizsgálnia,
hogy mekkora a különbség, mennyire változékonyak az adatok,
és mennyire egyeztethető össze az eredmény a véletlen
mintavételi ingadozással.**


### 1.1. Populáció és minta

**Populáció (alapsokaság):** azon egyének vagy megfigyelések
teljes összessége, amelyről következtetéseket szeretnénk levonni.

**Minta:** a populáció azon részhalmaza,
amelyből ténylegesen adatokat gyűjtünk.

| Populációs paraméter | Mintastatisztika |
| --- | --- |
| Várható érték (sokasági átlag): \(\mu\) | Mintaátlag: \(\bar{x}\) |
| Szórás: \(\sigma\) | Szórás: \(s\) |
| Véges sokaság elemszáma: \(N\) | Mintaelemszám: \(n\) |

A populációs paraméterek általában ismeretlenek.
A mintából számított statisztikákkal becsüljük őket.
A minta azonban csak bizonytalan információt szolgáltat
a teljes populációról.


### 1.2. Leíró és következtető statisztika

**Leíró statisztika:** a ténylegesen megfigyelt
adatok jellemzése, például átlag, szórás és gyakoriság segítségével.

**Következtető statisztika (statisztikai következtetés):** a mintából kiindulva
a populációra vonatkozó következtetések levonása, a mintavételi
bizonytalanság figyelembevételével.

A leíró statisztika kérdése:
*Milyenek a megfigyelt adatok?*

A következtető statisztika kérdése:
*Mit tudhatunk meg az adatokból a populációról?*



<!-- section: s2 -->


## 2. Leíró statisztika

A leíró statisztikában a **középértékek** az adatok központi
elhelyezkedését, a **szóródási mutatók** a változékonyságukat,
az **alakmutatók** pedig az eloszlás alakját jellemzik.


### 2.1. Középértékek


#### Átlag (számtani közép)

Az átlag a megfigyelések összegének és számának hányadosa.


::: formula
\[
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
\]
:::


::: example
**Példa:**

 2, 4, 4, 6, 9.

\[
\bar{x}=\frac{2+4+4+6+9}{5}=5
\]
:::

Az átlag minden megfigyelést figyelembe vesz,
de érzékeny a szélsőséges értékekre.


#### Medián

A nagyság szerint sorba rendezett adatok középső értéke.
A példában a medián 4. Páros elemszám esetén a két
középső érték átlagát vesszük. A medián kevésbé érzékeny
a szélsőséges értékekre.


#### Módusz

A leggyakrabban előforduló érték. A példában 4.
Egy eloszlásnak több módusza is lehet.


### 2.2. Szóródási mutatók

A szóródási mutatók azt jellemzik, hogy a megfigyelések
mennyire különböznek egymástól. Két eloszlásnak lehet
azonos átlaga, miközben szóródásuk jelentősen eltér.


{{widget:dispersionChart}}


#### Terjedelem

A legnagyobb és legkisebb érték különbsége.


::: formula
\[
R=x_{\max}-x_{\min}
\]
:::

A példában \(9-2=7\). Könnyen kiszámítható,
de érzékeny a szélsőséges megfigyelésekre.


#### Variancia (szórásnégyzet)

A megfigyelések átlagtól vett négyzetes eltérései alapján
számított változékonysági mutató.


::: formula
\[
s^2=\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}
\]
:::

Az itt használt, \(n-1\) nevezőjű mutató neve
**korrigált tapasztalati szórásnégyzet**, másként korrigált mintavariancia.
Független, azonos eloszlású, véges varianciájú megfigyelések esetén
torzítatlanul becsüli a sokasági varianciát; szabadságfoka \(n-1\).
Az \(n\) nevezővel számított változat a korrigálatlan tapasztalati szórásnégyzet, azaz variancia.


#### Szórás (standard deviation, SD)


::: formula
\[
s=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}}
\]
:::

A szórás a variancia négyzetgyöke.
Az eredeti mérési egységben fejezzük ki.
Az itt szereplő \(s\) pontos neve **korrigált tapasztalati szórás**;
a jegyzet további részében ezt röviden mintaszórásnak nevezzük.



#### Interkvartilis terjedelem (IQR)


::: formula
\[
IQR=Q_3-Q_1
\]
:::

A harmadik és első kvartilis különbsége.
Az adatok középső 50%-ának szóródását jellemzi,
és kevésbé érzékeny a kiugró értékekre.


### 2.3. Alakmutatók: ferdeség és csúcsosság

#### Ferdeség (aszimmetria; skewness)

A **ferdeség** az eloszlás aszimmetriáját jellemzi.
A szóródási mutatókat kiegészítő **alakmutató**;
számszerű jellemzésére ferdeségi együtthatót használunk.

- **Pozitív (jobbra) ferdeség:** az eloszlás jobb oldali farka hosszabb, a nagy értékek irányába nyúlik.
- **Negatív (balra) ferdeség:** a bal oldali farok hosszabb, a kis értékek irányába nyúlik.
- **Nulla ferdeség:** jellemző a szimmetrikus eloszlásokra, de önmagában nem bizonyítja a szimmetriát vagy a normalitást.

::: example
**Példa:** A reakcióidők eloszlása gyakran jobbra ferde:
sok válasz viszonylag gyors, néhány azonban nagyon lassú.
Egy könnyű teszten sok magas és néhány alacsony pontszám
balra ferde eloszlást eredményezhet.
:::

#### Csúcsosság (kurtosis)

A **csúcsosság** az eloszlás alakját jellemző mutató.
A JASP leíró statisztikai táblázatának **Kurtosis** értéke
a mintanagyságra korrigált **excess kurtosis** (többletcsúcsosság).
Jelöljük ezt \(K\)-val. A normális eloszláshoz tartozó elméleti referenciaértéke 0.

**A JASP által használt képlet:**

::: formula
\[
K=
\frac{n(n+1)}{(n-1)(n-2)(n-3)}
\sum_{i=1}^{n}\left(\frac{x_i-\bar{x}}{s}\right)^4
-\frac{3(n-1)^2}{(n-2)(n-3)}
\]
:::

A képletben \(n\) az érvényes megfigyelések száma,
\(x_i\) az egyes megfigyelések értéke, \(\bar{x}\) a mintaátlag,
\(s\) pedig az \(n-1\) nevezővel számított korrigált tapasztalati szórás.
A számításhoz legalább négy megfigyelés és nullánál nagyobb szórás szükséges.

**A számítás lépései:**

1. Kiszámítjuk a mintaátlagot és a korrigált tapasztalati szórást.
2. Minden értékből kivonjuk a mintaátlagot, majd az eltérést elosztjuk a szórással.
3. Ezeket a standardizált eltéréseket a negyedik hatványra emeljük és összeadjuk.
4. Az összeget megszorozzuk a képlet első törtjével, majd kivonjuk a második törtet.

**A kurzusban alkalmazott gyakorlati értelmezés:**

| A JASP Kurtosis értéke | Értelmezés a csúcsosság alapján |
| --- | --- |
| \(K < -2\) | Lapos eloszlás. |
| \(-2 \leq K \leq +2\) | Közel normálisnak tekinthető csúcsosság. |
| \(K > +2\) | Csúcsos eloszlás. |

::: example
**Példák a besorolásra:** \(K=-2{,}4\) esetén lapos,
\(K=0{,}8\) esetén a csúcsosság alapján közel normális,
\(K=3{,}1\) esetén csúcsos eloszlásról beszélünk a kurzus szabálya szerint.
:::

::: note
A −2 és +2 közötti tartomány itt gyakorlati elfogadási tartomány,
nem a JASP által elvégzett normalitáspróba eredménye.
A teljes normalitás megítéléséhez a ferdeséget és az eloszlás ábráját is vizsgáljuk.
A „lapos” és „csúcsos” hagyományos elnevezés: a mutató a szélsőséges értékek
szerepét is tükrözi, nem pusztán a görbe csúcsának magasságát.
:::

### 2.4. Melyik mutatót válasszuk?

| Adatok jellemzője | Ajánlott mutató |
| --- | --- |
| Közel szimmetrikus eloszlás | Átlag és szórás |
| Erősen ferde eloszlás | Medián és IQR |
| Kategorikus változó | Gyakoriság, százalék |
| Szélső értékek bemutatása | Minimum, maximum, terjedelem |



<!-- section: s3 -->


## 3. Valószínűség és véletlen ingadozás

A valószínűség azt fejezi ki, hogy egy adott
valószínűségi modellben mennyire valószínű
egy esemény bekövetkezése.

- \(P=0\): az esemény valószínűsége nulla.
- \(P=0{,}5\): 50%-os valószínűség.
- \(P=1\): az esemény 1 valószínűséggel következik be.

Véges, egyenlő esélyű kimenetelekkel leírt modellekben a 0 lehetetlen,
az 1 biztos eseménynek felel meg. Folytonos eloszlásnál egy konkrét
érték felvételének valószínűsége 0 lehet anélkül, hogy az érték lehetetlen volna.

A valószínűség matematikailag kifejezhető a következőképpen:

\[
P=\frac{kedvező\, kimenetelek\, száma}{összes\, kimenetel}
\]


Egy szabályos pénzérme feldobásakor a fej
valószínűsége \(0{,}5\). Tíz dobásból azonban nem
feltétlenül kapunk pontosan öt fejet.

Ez a **véletlen ingadozás**:
a megfigyelt eredmények eltérhetnek a várható értéktől
akkor is, ha a mögöttes valószínűség változatlan.


### 3.1. Véletlen ingadozás a pszichológiában

A reakcióidők, memóriapontszámok és más pszichológiai
mérések változnak a résztvevők között és az ismételt
mérések során is.

Tegyük fel, hogy két populáció átlagos reakcióideje
azonos. Két véletlenül kiválasztott mintában mégis
kaphatunk 510 és 520 ms-os mintaátlagot.


::: note
**Fontos:**


A mintaátlagok közötti különbség nem bizonyítja
automatikusan a populációs átlagok különbségét.
A következtetési statisztika ezt a bizonytalanságot
kezeli.
:::



<!-- section: s4 -->


## 4. A normális eloszlás és a z-pontszám


### 4.1. Normális eloszlás

A normális eloszlás szimmetrikus, haranggörbe alakú
folytonos valószínűségi eloszlás.

Két paramétere az átlag (\(\mu\)), amely a középpontot,
és a szórás (\(\sigma\)), amely a szélességet határozza meg.


{{widget:normalChart}}

Normális eloszlás esetén megközelítőleg:

- Az értékek 68%-a az átlagtól számított 1 szóráson belül található.
- Az értékek 95%-a az átlagtól számított 2 szóráson belül található.
- Az értékek 99,7%-a az átlagtól számított 3 szóráson belül található.

Nem minden pszichológiai változó normális eloszlású.
Például a reakcióidők gyakran jobbra ferdék.


### 4.2. z-pontszám

A z-pontszám azt fejezi ki, hogy egy megfigyelés
hány populációs szórásnyira található az átlagtól.


::: formula
\[
z=\frac{x-\mu}{\sigma}
\]
:::

A pozitív z-érték átlag feletti, a negatív
átlag alatti megfigyelést jelent.


::: example
**Példa:**

 Egy intelligenciateszt átlaga 100,
szórása 15. Egy személy 130 pontot ér el.

\[
z=\frac{130-100}{15}=2
\]

A pontszám két szórással van az átlag fölött.
Normális eloszlás esetén az értékek körülbelül
97,7%-a ez alatt található.
:::



<!-- section: s5 -->


## 5. Mintavételi eloszlások és standard hiba


### 5.1. Mi a mintavételi eloszlás?

Tegyük fel, hogy a populáció átlagos
intelligenciapontszáma 100.

Véletlenszerűen kiválasztunk 30 embert, és
kiszámítjuk az átlagukat. Ez lehet például 103.
Egy második mintában 98, egy harmadikban 101.

Ha ezt több ezerszer, mindig azonos mintanagysággal megismételjük,
és a mintaátlagokat ábrázoljuk, szemléltethetjük
**a mintaátlag mintavételi eloszlását**.
Az elméleti mintavételi eloszlás a mintaátlag lehetséges értékeit
és a hozzájuk tartozó valószínűségeket írja le.


::: note
A megfigyelések eloszlása az egyének
közötti változékonyságot írja le.
A mintaátlag mintavételi eloszlása azt mutatja meg,
hogyan változnának a mintaátlagok ismételt mintavételek során.
:::

Mintavételi eloszlás illusztráció - potyogó bogyók: <https://www.esci-dances.thenewstatistics.com/>

### 5.2. Standard hiba (SE)

Egy statisztikai mutató mintavételi eloszlásának
szórását standard hibának nevezzük.

Az átlag standard hibája független, azonos
eloszlású megfigyelések esetén:


::: formula
\[
SE_{\bar{x}}=\frac{\sigma}{\sqrt{n}}
\]
:::

Mivel a populációs szórás általában ismeretlen,
a standard hibát a mintaszórással becsüljük:


::: formula
\[
\widehat{SE}_{\bar{x}}=\frac{s}{\sqrt{n}}
\]
:::

Azonos mintaelemszám mellett a nagyobb szórás nagyobb standard hibát
eredményez; azonos szórás mellett a nagyobb mintaelemszám kisebb standard hibával jár.


::: example
**Példa:**

 100 hallgató szorongáspontszámának
szórása 20.

\[
\widehat{SE}_{\bar{x}}=\frac{20}{\sqrt{100}}=2
\]

400 hallgató esetén, azonos szórással:

\[
\widehat{SE}_{\bar{x}}=\frac{20}{\sqrt{400}}=1
\]
:::


{{widget:standard-error}}


### 5.3. Centrális határeloszlás-tétel

Független, azonos eloszlású, véges és pozitív varianciájú megfigyelések
esetén a mintaátlag mintavételi eloszlása nagy mintában normális
eloszlással közelíthető, akkor is, ha a populáció eloszlása nem normális.
Pontosabban a standardizált mintaátlag eloszlása tart a standard normális eloszláshoz.

Ez nem azt jelenti, hogy maguk az adatok válnak
normális eloszlásúvá. A tétel a mintaátlagok
eloszlására vonatkozik.

Nincs olyan univerzális mintaelemszám, például
\(n=30\), amely minden populáció esetén garantálná
a megfelelő normális közelítést, de ha elérünk bizonyos mintaelemszámot, például \(n=30\), akkor feltételezhetjük a mintavételi eloszlás normalitását.



<!-- section: s6 -->


## 6. Tudományos hipotézisek és NHST

Az **NHST** a nullhipotézis szignifikanciavizsgálatának angol rövidítése
(*null hypothesis significance testing*).


### 6.1. Tudományos és statisztikai hipotézisek

A tudományos hipotézis egy jelenségre vonatkozó
magyarázat vagy előrejelzés.

Például: *Az alvásmegvonás rontja az
emlékezeti teljesítményt.*

Ennek statisztikai vizsgálatához populációs
paraméterekre vonatkozó hipotéziseket fogalmazunk meg.


#### Nullhipotézis (\(H_0\))

Általában azt állítja, hogy a vizsgált
populációs különbség vagy hatás nulla.


::: formula
\[
H_0:\mu_1=\mu_2
\]
:::


#### Alternatív hipotézis, másként ellenhipotézis (\(H_1\))

A nullhipotézissel versengő állítás,
amely szerint a populációs paraméter eltér
a nullhipotézis szerinti értéktől.


::: formula
\[
H_1:\mu_1\neq\mu_2
\]
:::


### 6.2. Egyoldali és kétoldali hipotézisek

**Kétoldali hipotézis:** a különbség
bármelyik irányban megjelenhet.


::: formula
\[
H_1:\mu_1\neq\mu_2
\]
:::

**Egyoldali hipotézis:** a kutató
előre meghatározott irányú különbséget vizsgál.


::: formula
\[
H_1:\mu_1<\mu_2
\]
:::

Az irányt az eredmények megtekintése előtt
kell kiválasztani és indokolni.
Általában a kétoldali próba az alapértelmezett.


### 6.3. Az NHST lépései

1. Megfogalmazzuk a \(H_0\) és \(H_1\) hipotézist.
2. Előre kiválasztjuk a szignifikanciaszintet (\(\alpha\)).
3. Kiszámítjuk a próbastatisztikát és a p-értéket.
4. Összehasonlítjuk a p-értéket az \(\alpha\)-val.
5. Elvetjük vagy nem vetjük el a nullhipotézist.


::: note
Ha \(p\leq\alpha\), elvetjük \(H_0\)-t.<br>


Ha \(p>\alpha\), nem vetjük el \(H_0\)-t.<br>


Az NHST nem számítja ki közvetlenül annak
valószínűségét, hogy \(H_0\) vagy \(H_1\) igaz.
:::



<!-- section: s7 -->


## 7. Próbastatisztikák, z-értékek és t-értékek


### 7.1. Próbastatisztika

A próbastatisztika (pl t-érték, z-érték, pearson-féle r) azt fejezi ki, hogy a megfigyelt
becslés mennyire tér el a nullhipotézis szerinti
értéktől (a hipotetikus értéktől), a becslés bizonytalanságához viszonyítva.


::: formula
\[
\text{Próbastatisztika}
=
\frac{\text{Megfigyelt becslés}-\text{Hipotetikus érték}}
{\text{Standard hiba}}
\]
:::

Egy 10 pontos különbség 2 pontos standard hiba
mellett szélsőségesebb, mint 20 pontos standard
hiba mellett.


### 7.2. z-próbastatisztika (u-próba)

Ismert populációs szórás és normális populációs eloszlás esetén
a várható érték vizsgálatára z-próbát használhatunk.
Magyar tananyagokban ez gyakran **u-próba** néven szerepel.
Nagy mintában megfelelő feltételek mellett közelítő eljárásként is alkalmazható.


::: formula
\[
z=\frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}
\]
:::

A 2-es z-próbastatisztika azt jelenti, hogy a
mintaátlag két standard hibával van a
nullhipotézis szerinti átlag fölött.

Ez nem azonos az egyéni z-pontszámmal:
ott a nevező a populációs szórás,
itt a mintaátlag standard hibája.


### 7.3. t-próbastatisztika

A pszichológiai kutatásokban a populáció szórása
rendszerint ismeretlen, ezért a mintából becsüljük.


::: formula
\[
t=\frac{\bar{x}-\mu_0}{s/\sqrt{n}}
\]
:::

A t-érték azt mutatja meg, hogy a megfigyelt
átlag hány becsült standard hibával tér el
a nullhipotézisben feltételezett átlagtól.


### 7.4. A t-eloszlás

A t-eloszlás hasonlít a standard normális eloszláshoz,
de szélső tartományaiban nagyobb a valószínűségtömeg (vastagabb a farka):
az abszolút értékben nagy értékek gyakrabban fordulnak elő.
Ez a populációs szórás becsléséből eredő
többletbizonytalanságot tükrözi.

A t-eloszlás alakja a szabadságfoktól (\(df\)) függ.
Egymintás t-próbánál:


::: formula
\[
df=n-1
\]
:::

A szabadságfok növekedésével a t-eloszlás
a standard normális eloszláshoz közelít.


::: note
A p-érték meghatározásához
a t-értéken kívül a szabadságfokot és a
próba egy- vagy kétoldali jellegét is ismernünk kell.
:::



<!-- section: s8 -->


## 8. A p-érték és a statisztikai szignifikancia


### 8.1. A p-érték meghatározása

A **p-érték** annak a valószínűsége,
hogy a nullhipotézis és a statisztikai modell
helyességét feltételezve a megfigyelttel azonos vagy
annál szélsőségesebb próbastatisztika-értéket kapjunk,
a próba által meghatározott irányban vagy irányokban.

vagy másképpen:

A **p-érték** annak a valószínűsége,
hogy a megfigyelt - vagy annál extrémebb - próbastatisztika-értéket kapjuk, 
ha feltételezzük, hogy a nullhipotézis igaz.

A kis p-érték azt jelenti, hogy a megfigyelt
eredmény viszonylag szokatlan lenne a nullmodell (a nullhipotézis igazsága) mellett.


### 8.2. Mit nem jelent a p-érték?

- A \(p=0{,}03\) nem jelenti azt, hogy 3% a nullhipotézis igazságának valószínűsége.
- Nem jelenti azt, hogy 97% az alternatív hipotézis igazságának valószínűsége.
- Nem jelenti azt, hogy 3% a valószínűsége annak, hogy az eredmény pusztán véletlenül keletkezett.
- Nem mutatja meg a hatás nagyságát vagy gyakorlati jelentőségét.


### 8.3. Szignifikanciaszint

A szignifikanciaszint (\(\alpha\)) előre meghatározott
döntési küszöb. Gyakori választás az \(\alpha=0{,}05\).

| p-érték | Döntés \(\alpha=0{,}05\) mellett |
| --- | --- |
| 0,003 | \(H_0\) elvetése |
| 0,041 | \(H_0\) elvetése |
| 0,049 | \(H_0\) elvetése |
| 0,051 | Nem vetjük el \(H_0\)-t |
| 0,300 | Nem vetjük el \(H_0\)-t |

A 0,05-ös küszöb konvenció. A \(p=0{,}049\) és
\(p=0{,}051\) nagyon hasonló bizonyítékot képvisel,
még ha a hagyományos besorolásuk különbözik is.


### 8.4. Döntés az alternatív hipotézisről

Ha a p-érték kellően kicsi, elvetjük a
nullhipotézist a meghatározott alternatív
hipotézis javára.

Ha \(p>\alpha\), nem vetjük el a nullhipotézist.
Ez **nem jelenti \(H_0\) elfogadását vagy
bizonyítását**.

A nem szignifikáns eredmény mögött állhat
valóban nulla hatás, de elégtelen mintaelemszám
vagy nagy mérési változékonyság is.


### 8.5. Első- és másodfajú hibák

| Döntés | \(H_0\) igaz | \(H_0\) hamis |
| --- | --- | --- |
| \(H_0\) elvetése | Elsőfajú hiba | Helyes elvetés |
| Nem vetjük el \(H_0\)-t | Helyes döntés | Másodfajú hiba |

**Elsőfajú hiba:** igaz nullhipotézis
elvetése. Megfelelően kalibrált próba esetén
ennek valószínűségét \(\alpha\) szabályozza.

**Másodfajú hiba:** hamis nullhipotézis
elvetésének elmulasztása. Valószínűségét \(\beta\) jelöli.

A **próba ereje**, másként **statisztikai erő** (power):


::: formula
\[
\text{Power}=1-\beta
\]
:::

A próba ereje annak valószínűsége,
hogy egy meghatározott valódi hatás fennállásakor
elvetjük a nullhipotézist.

A nagyobb minta, a kisebb változékonyság
és a nagyobb valódi hatás általában növeli
a statisztikai erőt.



<!-- section: s9 -->


## 9. A három alapvető t-próba

A független mintás t-próbát **független kétmintás t-próbának**,
a páros mintás t-próbát **páros t-próbának** vagy
**összetartozó mintás t-próbának** is nevezik.

Mindhárom t-próba egy átlagos különbséget
viszonyít annak becsült standard hibájához.

| Próba | Kutatási kérdés | Adatszerkezet |
| --- | --- | --- |
| Egymintás | Eltér-e egy átlag egy referenciaértéktől? | Egy minta |
| Független mintás | Különbözik-e két populáció átlaga? | Két független csoport |
| Páros mintás | Eltér-e nullától az átlagos páron belüli különbség? | Összetartozó mérések |


### 9.1. Egymintás t-próba

Egy populációs átlagot hasonlítunk
össze egy meghatározott referenciaértékkel.


::: example
**Példa:**

 Egy memóriateszt referenciaátlaga
100 pont. Egy 25 fős minta átlaga 106, szórása 12.

\[
H_0:\mu=100
\]

\[
H_1:\mu\neq100
\]


::: formula
\[
t=\frac{106-100}{12/\sqrt{25}}=2{,}50
\]
:::



\[
df=25-1=24
\]

**Eredmény:**


\(t(24)=2{,}50,\quad p\approx0{,}020\).
:::

Mivel \(p<0{,}05\), elvetjük \(H_0\)-t.
Statisztikailag szignifikáns bizonyítékot
találtunk arra, hogy a populációs átlag eltér 100-tól.


### 9.2. Független mintás t-próba

Két független csoport populációs átlagát
hasonlítjuk össze.


::: example
**Példa:**

 Egy mindfulness-tréninget
végző és egy kontrollcsoport figyelmi teljesítménye.

|  | Tréning | Kontroll |
| --- | --- | --- |
| \(n\) | 25 | 25 |
| Átlag | 80 | 70 |
| SD | 15 | 15 |



\[
H_0:\mu_1-\mu_2=0
\]

\[
H_1:\mu_1-\mu_2\neq0
\]
:::

A Student-féle független mintás t-próba
összevont szórást használ:


::: formula
\[
s_p=
\sqrt{
\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}
{n_1+n_2-2}
}
\]
:::


::: formula
\[
t=
\frac{\bar{x}_1-\bar{x}_2}
{s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}
\]
:::

A példában az összevont szórás 15,
a különbség standard hibája körülbelül 4,24.


::: formula
\[
t=
\frac{80-70}
{15\sqrt{\frac{1}{25}+\frac{1}{25}}}
\approx2{,}36
\]
:::

A szabadságfok:


::: formula
\[
df=n_1+n_2-2=48
\]
:::

**Eredmény:**
\(t(48)=2{,}36,\quad p\approx0{,}022\).

Elvetjük \(H_0\)-t. A csoportok átlagos figyelmi
teljesítménye között szignifikáns különbség van.

A szignifikáns különbség önmagában nem
bizonyít oksági kapcsolatot. Ehhez a
kutatási elrendezést is figyelembe kell venni.


#### Student- és Welch-féle t-próba

A Student-féle változat azonos populációs varianciákat
(**szóráshomogenitást**) feltételez. A Welch-féle változat
nem igényli ezt a feltételt, ezért gyakran
előnyösebb alapértelmezett választás.


::: formula
\[
t_{\mathrm{Welch}}=
\frac{\bar{x}_1-\bar{x}_2}
{\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}}
\]
:::

A Welch-próba módosított szabadságfokot használ.


### 9.3. Páros mintás t-próba

Összetartozó megfigyeléseket hasonlítunk össze,
például ugyanazon személyek beavatkozás előtti
és utáni pontszámait.


::: example
**Példa:**

 16 résztvevő szorongását
mérjük egy beavatkozás előtt és után.

A különbségpontszámokat így határozzuk meg:



\[
d_i=x_{i,\text{előtte}}-x_{i,\text{utána}}
\]

Átlagos különbség: 4 pont.<br>
A különbségpontszámok szórása: 6 pont.



\[
H_0:\mu_d=0
\]

\[
H_1:\mu_d\neq0
\]


::: formula
\[
t=\frac{\bar{d}}{s_d/\sqrt{n}}
=\frac{4}{6/\sqrt{16}}
\approx2{,}67
\]
:::



\[
df=16-1=15
\]

**Eredmény:**


\(t(15)=2{,}67,\quad p\approx0{,}018\).
:::

Elvetjük \(H_0\)-t. A beavatkozás előtti és
utáni mérések átlagos különbsége
statisztikailag szignifikáns.


::: note
**Fontos összefüggés:**


a páros mintás t-próba matematikailag
egy egymintás t-próba, amelyet a
párok különbségpontszámain végzünk el.
:::



<!-- section: s10 -->


## 10. A t-próbák előfeltételei

A t-próbák érvényessége a statisztikai
modell feltételeinek teljesülésétől függ.

| Próba | Fontos feltételek |
| --- | --- |
| Egymintás | Független megfigyelések; kis mintás pontos következtetéshez normális populációs eloszlás. |
| Független mintás | Független megfigyelések; kis mintás következtetéshez csoportonkénti normalitás; a Student-változatnál szóráshomogenitás is szükséges. A Welch-próba szabadságfokának meghatározása közelítő eljárás. |
| Páros mintás | Független párok; értelmezhető párosítás; kis mintás pontos következtetéshez a különbségpontszámok normalitása. |

A próbák érzékenyek lehetnek a szélsőséges
kiugró értékekre, különösen kis mintában.

A páros mintás t-próba normalitási feltétele
a különbségpontszámokra vonatkozik, nem
feltétlenül a nyers mérésekre.

A t-próbák mérsékelt normalitássértés mellett
gyakran robusztusak, de az erős ferdeség,
a kiugró értékek és a függő megfigyelések
veszélyeztethetik az érvényességet.

### 10.1. Ha a normalitási feltétel sérül: Mann–Whitney-próba

Két **független csoport** összehasonlításakor, ha a normalitás
jelentősen sérül, különösen kis mintában, a független mintás t-próba
helyett szóba jöhet a **Mann–Whitney-féle U-próba**.
Ez nemparaméteres, rangokon alapuló eljárás, amely nem feltételez
normális eloszlást. Feltétele azonban a megfigyelések függetlensége
és legalább ordinális mérési szintje.

A próba a két csoport értékeinek együttes rangsorolására épül.
Nem közvetlenül az átlagok különbségét vizsgálja; azonos alakú,
egymáshoz képest csak eltolódó eloszlások esetén a mediánok
különbségére vonatkozó következtetésként is értelmezhető.
Eltérő eloszlásalak mellett a szignifikáns eredmény nem feltétlenül
jelent mediánkülönbséget.

::: note
A Mann–Whitney-próba **független mintákra** alkalmazható,
ezért nem helyettesíti a páros mintás t-próbát.
Összetartozó méréseknél más eljárás, például megfelelő feltételek
mellett a Wilcoxon-féle előjeles rangpróba jöhet szóba.
A normalitás kisebb sérülése nem teszi automatikusan szükségessé
a t-próba lecserélését; a mintanagyságot, a kiugró értékeket
és a kutatási kérdést is figyelembe kell venni.
:::



<!-- section: s11 -->


## 11. Hatásméretek és konfidenciaintervallumok

A **hatásméret** és a **hatásnagyság** egyaránt használatos magyar elnevezés.
A **konfidenciaintervallum** másik bevett neve **megbízhatósági intervallum**.

A statisztikai szignifikancia nem azonos
a hatás nagyságával vagy gyakorlati jelentőségével.

Nagy mintában nagyon kicsi hatás is lehet
szignifikáns. Kis mintában jelentős hatás
is maradhat nem szignifikáns.


### 11.1. Cohen-féle d

A Cohen-féle d a különbséget
szórásegységekben fejezi ki.

Egymintás próba:


::: formula
\[
d=\frac{\bar{x}-\mu_0}{s}
\]
:::

Független minták, összevont szórással:


::: formula
\[
d=\frac{\bar{x}_1-\bar{x}_2}{s_p}
\]
:::

Páros minták egyik gyakori mutatója:


::: formula
\[
d_z=\frac{\bar{d}}{s_d}
\]
:::

| Cohen-féle d abszolút értéke | Hagyományos értelmezés |
| --- | --- |
| 0,20 | Kis hatás |
| 0,50 | Közepes hatás |
| 0,80 | Nagy hatás |

Ezek csak hozzávetőleges támpontok,
nem univerzális határértékek.
A mutató előjele az összehasonlítás irányát jelzi.


### 11.2. Konfidenciaintervallum

A konfidenciaintervallum a populációs
paraméter intervallumbecslése.

Egy átlag 95%-os t-alapú konfidenciaintervalluma:


::: formula
\[
CI_{95\%}=
\bar{x}\pm t_{0.975,df}\,
\widehat{SE}_{\bar{x}}
\]
:::


::: example
**Példa:**

 Átlag = 106, SE = 2,4,
\(df=24\), kritikus \(t\approx2{,}064\).

\[
106\pm2{,}064\times2{,}4
\]

\[
CI_{95\%}=[101{,}05;\ 110{,}95]
\]
:::

Az intervallum nem tartalmazza a 100-as
nullhipotézis szerinti értéket, ami összhangban
van a kétoldali t-próba 0,05-ös szinten
szignifikáns eredményével.


::: note
A 95%-os konfidenciaintervallumot olyan eljárással
számítjuk, amely megfelelő feltételek mellett
az ismételt mintavételek 95%-ában tartalmazza
a valódi populációs paramétert.
Nem azt jelenti, hogy a konkrét, rögzített
paraméter 95%-os valószínűséggel esik
az adott intervallumba.
:::



<!-- section: s12 -->


## 12. Melyik t-próbát válasszuk?


{{widget:test-selector}}



<!-- section: s13 -->


## 13. Statisztikai eredmények közlése

A pszichológiában a statisztikai eredményeket
az APA-stílus szerint közöljük.

A t-próba közlése rendszerint tartalmazza
az átlagokat, szórásokat, t-értéket,
szabadságfokot, p-értéket, valamint lehetőség
szerint a hatásméretet és konfidenciaintervallumot.


::: example
**Szignifikáns eredmény:**

<br>


A független mintás t-próba alapján a
tréningcsoport (\(M=80,\ SD=15\)) szignifikánsan
magasabb pontszámot ért el, mint a kontrollcsoport
(\(M=70,\ SD=15\)),
\(t(48)=2{,}36,\ p=0{,}022,\ d=0{,}67\).
:::


::: example
**Nem szignifikáns eredmény:**

<br>


A két csoport memóriateljesítménye közötti
különbség nem volt szignifikáns,
\(t(48)=1{,}12,\ p=0{,}268\).
:::

A nem szignifikáns eredmény nem bizonyítja
a különbség hiányát. Az értelmezés során
a becslés bizonytalanságát és a hatás
pszichológiai jelentőségét is figyelembe kell venni.



<!-- section: s14 -->


## 14. A legfontosabb fogalmak összefoglalása

| Fogalom | Meghatározás |
| --- | --- |
| Átlag | A megfigyelések számtani közepe. |
| Medián | A rendezett adatok középső értéke. |
| Módusz | A leggyakoribb érték. |
| Variancia (szórásnégyzet) | Négyzetes eltéréseken alapuló szóródási mutató; a szórás négyzete. |
| Szórás | Változékonyság az eredeti mértékegységben. |
| Korrigált tapasztalati szórás | Az \(n-1\) nevezőjű mintavariancia négyzetgyöke; a jegyzetben \(s\). |
| Ferdeség (skewness) | Az eloszlás aszimmetriájának mutatója; pozitív értéknél a jobb, negatívnál a bal oldali farok hosszabb. |
| Csúcsosság (JASP Kurtosis) | Mintanagyságra korrigált excess kurtosis. A kurzus szabálya szerint −2 alatt lapos, −2 és +2 között közel normális csúcsosságú, +2 fölött csúcsos eloszlás. |
| Valószínűség | Egy esemény bekövetkezéséhez rendelt, 0 és 1 közötti szám a valószínűségi modellben. |
| Normális eloszlás | Szimmetrikus, haranggörbe alakú eloszlás. |
| z-pontszám | Az átlagtól való eltérés szórásegységekben. |
| Mintavételi eloszlás | Egy statisztika eloszlása ismételt mintavételek során. |
| Standard hiba | Egy statisztika mintavételi eloszlásának szórása. |
| \(H_0\) | A vizsgált nullhipotézis. |
| \(H_1\) | Alternatív hipotézis, másként ellenhipotézis. |
| t-érték | Standard hibával standardizált eltérés. |
| t-eloszlás | A t-próbák referenciaeloszlása. |
| Szabadságfok | A referenciaeloszlást meghatározó mennyiség. |
| p-érték | Legalább ilyen szélsőséges próbastatisztika valószínűsége a nullmodell mellett. |
| Szignifikanciaszint | Az elsőfajú hiba valószínűségének előre rögzített felső korlátja (\(\alpha\)); a p-értékkel összevetett döntési küszöb. |
| Elsőfajú hiba | Igaz \(H_0\) elvetése. |
| Másodfajú hiba | Hamis \(H_0\) elvetésének elmulasztása. |
| A próba ereje (statisztikai erő) | \(H_0\) elvetésének valószínűsége meghatározott alternatíva mellett; \(1-\beta\). |
| Hatásméret (hatásnagyság) | A hatás nagyságának számszerű jellemzése. |
| Konfidenciaintervallum (megbízhatósági intervallum) | Olyan intervallumbecslési eljárás eredménye, amelynek hosszú távú lefedettségét a megbízhatósági szint adja meg. |



<!-- section: s15 -->


## 15. Gyakorlófeladatok

Válaszolj a kérdésekre, majd kattints
a „Válaszok ellenőrzése” gombra!


{{widget:quiz}}


{{widget:gradeBtn}}


{{widget:resetBtn}}


{{widget:quizScore}}



<!-- section: takeaways -->


## A legfontosabb tanulságok

1. A mintastatisztikák nem azonosak a populációs paraméterekkel.
2. A szórás a megfigyelések, a standard hiba a becslőstatisztika változékonyságát jellemzi.
3. A t-érték a megfigyelt különbséget a becsült standard hibához viszonyítja.
4. A p-érték nem a nullhipotézis igazságának valószínűsége.
5. A nem szignifikáns eredmény nem bizonyítja a nullhipotézist.
6. A t-próba kiválasztását a kutatási elrendezés határozza meg.
7. A teljes értelmezéshez a hatásméretet, a bizonytalanságot és a kutatási elrendezést is figyelembe kell venni.



<!-- Editable quiz data: correct is a zero-based answer index. -->

```quiz
[
  {
    "q": "Egy vizsgálatban a mintaátlag 75, a szórás 10. Mit ír le a szórás?",
    "opts": [
      "A populációs átlag becslésének pontosságát.",
      "Az egyéni megfigyelések változékonyságát a mintaátlag körül.",
      "Annak valószínűségét, hogy a nullhipotézis igaz."
    ],
    "correct": 1,
    "explanation": "A szórás az egyéni megfigyelések változékonyságát jellemzi. A standard hiba a becslőstatisztika mintavételi változékonyságát írja le."
  },
  {
    "q": "Egy mintában SD = 12 és n = 36. Mennyi a mintaátlag becsült standard hibája?",
    "opts": [
      "12",
      "6",
      "2",
      "0,33"
    ],
    "correct": 2,
    "explanation": "SE = 12 / √36 = 12 / 6 = 2."
  },
  {
    "q": "Egy statisztikai próba p = 0,03 eredményt ad. Melyik értelmezés helyes?",
    "opts": [
      "A nullhipotézis igazságának valószínűsége 3%.",
      "A nullhipotézis és a modell mellett egy legalább ilyen szélsőséges eredmény valószínűsége 3%.",
      "Az alternatív hipotézis igazságának valószínűsége 97%."
    ],
    "correct": 1,
    "explanation": "A p-érték a megfigyelttel azonos vagy annál szélsőségesebb próbastatisztika-érték valószínűsége a nullhipotézis és a modell feltételezése mellett, nem pedig a hipotézis igazságának valószínűsége."
  },
  {
    "q": "Ugyanazokat a résztvevőket mérjük meg alvásmegvonás előtt és után. Melyik próbát használjuk?",
    "opts": [
      "Független mintás t-próba",
      "Egymintás z-próba",
      "Páros mintás t-próba"
    ],
    "correct": 2,
    "explanation": "A mérések személyeken belül összetartoznak, ezért páros mintás t-próbát alkalmazunk."
  },
  {
    "q": "Egy kétoldali t-próba p = 0,18 eredményt ad α = 0,05 mellett. Mi a helyes döntés?",
    "opts": [
      "Elfogadjuk a nullhipotézist igaznak.",
      "Elvetjük a nullhipotézist.",
      "Nem vetjük el a nullhipotézist."
    ],
    "correct": 2,
    "explanation": "A nem szignifikáns eredmény nem bizonyítja a nullhipotézist. Csak azt jelenti, hogy a választott szinten nem vetjük el."
  },
  {
    "q": "Ha a szórás változatlan, hogyan hat a mintaelemszám növelése a standard hibára?",
    "opts": [
      "Növeli a standard hibát.",
      "Csökkenti a standard hibát.",
      "Nem befolyásolja."
    ],
    "correct": 1,
    "explanation": "SE = s / √n. Nagyobb n mellett kisebb a standard hiba."
  }
]
```

```explanations
{
  "one": "<strong>Egymintás t-próba.</strong>\n  A mintaátlagot egy meghatározott referenciaértékhez\n  hasonlítjuk. Minden résztvevő egy megfigyelést ad.",
  "ind": "<strong>Független mintás t-próba.</strong>\n  A két csoport különböző résztvevőkből áll,\n  és a populációs átlagokat hasonlítjuk össze.",
  "pair": "<strong>Páros mintás t-próba.</strong>\n  Minden résztvevőt kétszer mérünk.\n  A próba a személyeken belüli különbségek\n  átlagát vizsgálja."
}
```
