# A magyar statisztikai szóhasználat ellenőrzése

Ellenőrzés dátuma: 2026. október 27.

**Frissítés – 2026. október 28.:** A csúcsosság részt a kurzushoz igazítottuk:
a jegyzet már a JASP által használt, mintanagyságra korrigált excess kurtosis
képletét, a számítás lépéseit és a −2…+2 közötti gyakorlati elfogadási
tartományt tartalmazza. A tartományon belüli értéket a csúcsosság alapján
közel normálisnak, az alatta levőt laposnak, a fölötte levőt csúcsosnak
minősíti. A számítás forrása a [JASP Descriptives hivatalos forráskódja](https://github.com/jasp-stats/jaspDescriptives/blob/master/R/descriptives.R#L1501-L1517);
a küszöbértékek a kurzus megadott értelmezési szabályát követik.
Az alábbi ellenőrzési összefoglaló az előző napi állapotot dokumentálja.

A teljes `notes.md` szövegét, a fogalomtárat és a Markdownba ágyazott feladatszövegeket átnéztem. A javítások bekerültek a jegyzetbe és az újraépített `index.html` fájlba. Az alábbi összefoglaló megkülönbözteti a szaknyelvi változatokat a tartalmi javításoktól.

## Szaknyelvi pontosítások

| Kifejezés | A jegyzetben alkalmazott megoldás |
| --- | --- |
| Populáció | Első előforduláskor az alapsokaság elnevezés is szerepel; a populáció szó megmaradt. |
| Populációs átlag | A jelöléstáblázat a várható érték (sokasági átlag) és a mintaátlag megnevezést különíti el. |
| Variancia, szórásnégyzet | Mindkettő helyes. Az n−1 nevezőjű becslést korrigált tapasztalati szórásnégyzetként azonosítottam. |
| Mintaszórás | A képletben korrigált tapasztalati szórás szerepel. A későbbi rövidített szóhasználatot külön mondat rögzíti. |
| Ferdeség, csúcsosság | Önálló alakmutatóként szerepelnek, a szóródási mutatókat követő alfejezetben. |
| Alternatív hipotézis | Az ellenhipotézis megfelelő elnevezését is feltüntettem. |
| z-próba | Megjelent a magyar tananyagokban gyakori u-próba megnevezés is. |
| Független és páros mintás t-próba | A meglévő neveket megtartottam, és megadtam a független kétmintás, illetve páros vagy összetartozó mintás megfelelőket. |
| Egyenlő varianciák | A Student-féle kétmintás próbánál szerepel a szóráshomogenitás elnevezés is. |
| Statisztikai erő | A próba ereje megfelelőjével együtt szerepel. |
| Hatásméret | A hatásnagyság megfelelőjével együtt szerepel. |
| Konfidenciaintervallum | A megbízhatósági intervallum megfelelőjével együtt szerepel. |

A korrigált tapasztalati szórás és az interkvartilis terjedelem elnevezését az [ELTE matematikai statisztika gyakorlatának összefoglalójával](https://zempleni.elte.hu/InfoMatStat_elm.pdf) vetettem össze. A hivatkozott jegyzet képleteit nem vettem át ellenőrzés nélkül; itt a szóhasználat összehasonlítása volt a cél.

A próbanevek, az ellenhipotézis és az u-próba használatára a [Debreceni Egyetem Hipotézisvizsgálatok című tananyaga](https://psycho.unideb.hu/archivum/hipotezisvizsgalatok/egy-es-ketmintas-probak-a-varhato-ertekre.html) szolgált összehasonlításként. A független mintás és páros t-próba megnevezése a [Debreceni Egyetem pszichológiai statisztika előadásában](https://psycho.unideb.hu/munkatarsak/balazs_katalin/stat2/stat2_ora3.pdf) is szerepel.

A próba ereje és a hatásnagyság szóhasználatára példa a [Semmelweis Egyetem 2025/2026-os tanulmányi tájékoztatója](https://semmelweis.hu/aok/files/2025/10/000_UJ_osszes_2025_2026pdf.pdf), a hatásméret és hatásnagyság párhuzamos használatára pedig egy [Statisztikai Szemle-tanulmány](https://www.ksh.hu/statszemle_archive/all/2024/2024_03/2024_03_215.pdf).

## Tartalmi és értelmezési javítások

- A csúcsossági táblázatban a normális eloszlás kurtosisa 3, excess kurtosisa 0 lett. A korábbi −2…+2 tartomány nem ezek definíciója. Egy kurzus gyakorlati küszöbszabályát külön kell kezelni az elméleti referenciaértéktől.
- A csúcsosság szövege megkülönbözteti a magyar tananyagokban gyakori, 0-hoz viszonyított együtthatót a korrekció nélküli kurtosistól. A fogalomtár ugyanezt a szóhasználatot követi.
- Megmaradt a pontosítás, hogy a csúcsosság értelmezése túlmutat a görbe csúcsának magasságán.

A 0-hoz viszonyított magyar csúcsossági együtthatót a [Debreceni Egyetem eloszlásvizsgálati fejezete](https://psycho.unideb.hu/archivum/hipotezisvizsgalatok/eloszlasok-vizsgalata.html) és a [Statisztikai elemzések pszichológus hallgatóknak leíró statisztikai fejezete](https://pszistat.hu/leirostat.html) is használja. A két definíció és az eloszlás szélső tartományainak szerepe a [NIST módszertani kézikönyvében](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm) ellenőrizhető.

További pontosítások: a standard hiba összehasonlításánál rögzítettem, melyik mennyiséget tartjuk változatlanul; a mintavételi eloszlás szimulációját elkülönítettem az elméleti eloszlástól; a centrális határeloszlás-tételnél megjelentek az alapfeltételek és a standardizálás. A z-próbánál pontosítottam az alkalmazási feltételeket, a Welch-próbánál a közelítést, a Cohen-féle d értelmezésénél pedig az abszolút érték szerepét. A p-érték megfogalmazását és a valószínűség fogalomtári meghatározását is egyértelműsítettem.

## Megtartott, helyes elnevezések

A standard hiba, interkvartilis terjedelem, konfidenciaintervallum, következtető statisztika, hatásméret, valamint az első- és másodfajú hiba használata nem igényelt lecserélést. A magyar tananyagok nem mindenütt ugyanazokat a változatokat használják; a szinonimák feltüntetése segíti az összevetést a kurzus saját szóhasználatával.
