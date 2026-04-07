import { useState, useCallback } from "react";
import Topbar from "@/components/Topbar";
import Kicker from "@/components/Kicker";
import InfoCard from "@/components/InfoCard";
import Note from "@/components/Note";
import CheckList from "@/components/CheckList";
import DayAccordion from "@/components/DayAccordion";
import Chip from "@/components/Chip";
import { Award, Users, Play, MessageCircleQuestion, Target, Scale } from "lucide-react";

const Index = () => {
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({});

  const expandAll = useCallback(() => {
    const all: Record<number, boolean> = {};
    for (let i = 1; i <= 11; i++) all[i] = true;
    setOpenDays(all);
  }, []);

  const collapseAll = useCallback(() => setOpenDays({}), []);

  const toggleDay = (day: number) =>
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));

  return (
    <div className="min-h-screen bg-background">
      <Topbar />

      {/* Hero */}
      <section id="vision" className="py-20 px-[5%]">
        <div className="max-w-content mx-auto">
          <Kicker text={`Képzés fókusz \u2022 konzervatív, szakmai hang`} />
          <h1 className="text-[44px] font-bold leading-[1.15] tracking-tight mb-3.5">
            <span className="text-primary">Minősített</span> mesterséges intelligencia és automatizációs könyvelő szakértő
          </h1>
          <p className="text-lg text-muted-foreground max-w-[920px] mt-3.5">
            Nem eszközlistát adunk, hanem <b>működési mintákat</b>. A résztvevő a képzés végére átlátja,
            hogyan lehet AI-t bevezetni <b>mérhetően</b>, <b>biztonságosan</b>, <b>dokumentáltan</b> – könyvelői nyelven.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-[18px]">
            <a href="#days" className="inline-flex items-center justify-center rounded-lg px-[18px] py-3 font-semibold text-sm border border-primary/50 text-primary bg-transparent hover:bg-primary/[0.06] transition-all">
              Ugrás a részletes tematikára ▸
            </a>
            <button onClick={expandAll} className="inline-flex items-center justify-center rounded-lg px-[18px] py-3 font-semibold text-sm border border-primary/50 text-primary bg-transparent hover:bg-primary/[0.06] transition-all">
              Összes kinyitása
            </button>
            <button onClick={collapseAll} className="inline-flex items-center justify-center rounded-lg px-[18px] py-3 font-semibold text-sm border border-primary/50 text-primary bg-transparent hover:bg-primary/[0.06] transition-all">
              Összes bezárása
            </button>
          </div>
        </div>
      </section>

      {/* Miért fontos most? */}
      <section id="why-now" className="py-20 px-[5%]">
        <div className="max-w-content mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <InfoCard>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Miért fontos most?</h2>
              <p className="text-lg text-muted-foreground mt-2.5">
                A cél nem az, hogy {`\u201EAI-t használjunk\u201D`}, hanem hogy az AI <b>működési infrastruktúra</b> legyen: kontrollált, dokumentált és mérhető.
              </p>
              <Note>
                <CheckList items={[
                  `2026-tól a könyvelői piac élesen szétválik: rendszerszinten működő irodák vs. manuális túlélők.`,
                  `Az AI nem \u201Eextra\u201D, hanem működési infrastruktúra kérdés lett.`,
                  `A jogi és governance elvárások gyorsabban változnak, mint a szakmai gyakorlat.`,
                  <>Nem az a kérdés, hogy használunk-e AI-t, hanem hogy <b>hogyan</b> és milyen keretek között.</>,
                ]} />
              </Note>
              <Note>
                <b>Megjegyzés:</b> Ez egy belső draft a képzés pozicionálásához és struktúrájához – nem marketing anyag.
              </Note>
            </InfoCard>
          </div>

          <div className="col-span-12 md:col-span-7">
            <InfoCard>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Kinek szól?</h2>
              <p className="text-lg text-muted-foreground mt-2.5">
                Azoknak a szakembereknek, akik a napi működésben szeretnének <b>időt nyerni</b>, <b>hibát csökkenteni</b> és <b>biztonságosan skálázni</b> – irodai realitások mentén.
              </p>
              <Note>
                <CheckList items={[
                  `Könyvelőiroda tulajdonosoknak`,
                  `Vezető könyvelőknek`,
                  `Adótanácsadóknak`,
                  `Olyan szakembereknek, akik működési szinten akarnak AI-t bevezetni`,
                  `Akik rendszert akarnak építeni, nem trükköket tanulni`,
                ]} />
              </Note>
            </InfoCard>
          </div>

          <div className="col-span-12 md:col-span-5">
            <InfoCard>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Mit nem kérünk tőled?</h2>
              <p className="text-lg text-muted-foreground mt-2.5">
                Nem cél, hogy fejlesztő legyél. A cél, hogy legyen egy <b>érthető döntési és működési kereted</b> az AI-hoz.
              </p>
              <Note>
                <CheckList items={[
                  `Nem kell programozónak lenned`,
                  `Nem kell technológiai szakértőnek lenned`,
                  `Nem kell \u201EAI rajongónak\u201D lenned`,
                  `Nem kell radikálisan átalakítanod az irodádat`,
                ]} />
              </Note>
              <Note><b>Ez nem tech képzés.</b> Ez működési és döntési képzés.</Note>
            </InfoCard>
          </div>

          <div className="col-span-12">
            <InfoCard>
              <Note>
                <b>Megjegyzés:</b> A célcsoport kommunikációja szándékosan {`\u201Eirodatulajdonosi nyelven\u201D`} van megfogalmazva, hogy ne riassza el a konzervatívabb szereplőket sem.
              </Note>
            </InfoCard>
          </div>

          <div className="col-span-12">
            <InfoCard>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Mit tanít valójában?</h2>
              <p className="text-lg text-muted-foreground mt-2.5">
                A program azt tanítja meg, hogyan lesz az AI-ból <b>megbízható munkatárs</b> a folyamatban – úgy, hogy közben megmarad a <b>szakmai kontroll</b>.
              </p>
              <Note>
                <CheckList items={[
                  `Hogyan gondolkodj AI-val – nem csak hogyan használd.`,
                  `Hogyan építs validált use case-eket.`,
                  `Hogyan mérd a hatást (ROI keret).`,
                  `Hogyan vezesd be governance és compliance mellett.`,
                  `Hogyan kerüld el a \u201EPoC purgatóriumot\u201D.`,
                  `Hogyan lesz az AI-ból üzemszerű működés.`,
                ]} />
              </Note>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Mi különbözteti meg - Purple gradient section */}
      <section className="section-purple py-20 px-[5%]">
        <div className="max-w-content mx-auto">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white mb-2">
            Mi különbözteti meg más AI <span className="text-white/70">képzésektől</span>?
          </h2>
          <p className="text-lg text-white/80 max-w-[920px] mb-10">
            Itt a fókusz nem az, hogy {`\u201Emit tud a ChatGPT\u201D`}, hanem az, hogy az AI-ból <b>üzemszerű, ismételhető</b> teljesítmény legyen –
            <b> méréssel</b>, <b>felelősséggel</b> és <b>megfeleléssel</b>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-7">
              <Target className="text-white/80 mb-4" size={32} />
              <h3 className="text-white text-lg font-bold mb-2 normal-case tracking-normal">Nem eszközlista</h3>
              <p className="text-white/80 text-sm">Döntési logikát adunk: mikor elég az egyszerű megoldás, mikor kell kontrolláltabb építkezés.</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-7">
              <Play className="text-white/80 mb-4" size={32} />
              <h3 className="text-white text-lg font-bold mb-2 normal-case tracking-normal">Nem prompt-gyűjtemény</h3>
              <p className="text-white/80 text-sm">Workflow-t tanítunk: kontextus, validáció, dokumentálás – hogy a minőség ne emberfüggő legyen.</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-7">
              <Scale className="text-white/80 mb-4" size={32} />
              <h3 className="text-white text-lg font-bold mb-2 normal-case tracking-normal">Jog + governance + ROI</h3>
              <p className="text-white/80 text-sm">Nem külön blokkok, hanem összekapcsolt működési keret. Stabil működés: pilot → mérés → skálázás.</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-7">
              <Award className="text-white/80 mb-4" size={32} />
              <h3 className="text-white text-lg font-bold mb-2 normal-case tracking-normal">Minősítési logika</h3>
              <p className="text-white/80 text-sm">A tudásszint visszaigazolása a cél – nem automatikus {`\u201Eoklevél\u201D`}. Könyvelői környezetre optimalizált.</p>
            </div>
          </div>

          <Note purple>
            <b>Megjegyzés:</b> A belső egyeztetésben szándékosan {`\u201Ekonzervatív\u201D`} a hangnem – a public landing verziót később finomhangoljuk.
          </Note>
        </div>
      </section>

      {/* Tematika */}
      <section id="days" className="py-20 px-[5%] bg-secondary border-t border-b border-border">
        <div className="max-w-content mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <InfoCard>
              <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Részletes tematika – 11 tanítási nap (lenyíló)</h2>
              <p className="text-lg text-muted-foreground mt-2">
                Minden nap <b>4×45 perc</b>. A napok a program logikáját követik: gondolkodásmód → workflow → use case → jog/governance → tech minimum → lezárás.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Chip label="Élő online" />
                <Chip label="Visszanézhető" />
                <Chip label="Gyakorlatorientált" />
                <Chip label="Minősítési vizsga (nem automatikus)" />
              </div>
            </InfoCard>
          </div>

          <div className="col-span-12 space-y-0">
            <DayAccordion title="1. nap – Belépés az AI korszakba – szemléletváltás, működési alapok és az AI mint kognitív partner" isOpen={!!openDays[1]} onToggle={() => toggleDay(1)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Németh Gábor</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <p className="mt-2 text-sm leading-relaxed">
                Ez az alkalom mindennek az alapja. Nem arról szól, hogy „hogyan használd a ChatGPT-t", hanem arról, hogy megértsd: egy olyan paradigmaváltás zajlik, ami alapjaiban változtatja meg a könyvelői szakma működését. A résztvevő áttekintést kap az AI fejlődéséről és a nagy nyelvi modellek működéséről — de ami ennél fontosabb: megérti, hogy az AI nem a jelenlegi munkafolyamatainkra ül rá, hanem a munkafolyamatok maguk alakulnak át. Az agentikus AI-korszak küszöbén egy bevallás kitöltése, egy form feldolgozása már nem „segítség AI-jal", hanem AI-ra delegált feladat lesz. Ez azt jelenti, hogy a könyvelő szerepe is változik: egy kitágított kognitív térben, AI-kollégákkal együtt dolgozva, workflow-szemléletben kell gondolkodnia — ami előrevetíti, hogy gyakorlatilag egy új típusú, ma még „fejlesztőinek" tartott munkavégzés felé haladunk. A nap végére a résztvevőben kialakul az a szemléleti alap, amire a képzés többi napja épül — és világossá válik, hogy az AI-jártasság ma már nem versenyelőny, hanem működési feltétel.
              </p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Tervezett tematika</p>
              <CheckList items={[
                "A paradigmaváltás, ami már zajlik – miért nem opció a kivárás a könyvelői szakmában",
                "Az agentikus AI-korszak küszöbén – amikor az AI már nem csak válaszol, hanem végrehajt",
                `Nagy nyelvi modellek működése – hogyan \u201Egondolkodik\u201D az AI, és miért fontos ezt érteni`,
                "AI modellek a kognitív workflow-ban – melyik modellnek mi a szerepe, és mikor melyiket válaszd",
                "Az AI mint kognitív partner – nem helyettesítés, hanem együttgondolkodás egy kitágított térben",
                "Nem a régi folyamatra AI-t, hanem új munkafolyamatokat – a citizen developer szemlélet előrevetítése",
                "AI-jártasság: a különbséget nem a gép, hanem a felhasználó tudása jelenti",
                "Gyakorlati demonstrációk – hogyan változik meg a munka az AI-jal, élőben",
              ]} />
            </DayAccordion>

            <DayAccordion title="2. nap – Advanced kognitív workflow I. (Elemzés & kutatás)" isOpen={!!openDays[2]} onToggle={() => toggleDay(2)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Németh Gábor</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Komplex szakmai kérdések elemzése strukturált gondolkodással (nem \u201Epromptolás\u201D).`,
                `Döntés-előkészítő munkafolyamatok: több nézőpont, ellenőrzési pontok, következtetések.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Vertikális (mély) elemzés: bontás, részproblémák, hipotézisek.`,
                `Horizontális perspektívabővítés: alternatív megoldások, kockázati forgatókönyvek.`,
                `\u201EKérdésfák\u201D és döntési térkép: hogyan lesz a beszélgetésből szakmai struktúra.`,
                `Validációs keret: mi az, amit mindig vissza kell ellenőrizni.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="3. nap – Advanced kognitív workflow II. (Tudásbázis & standardizálás)" isOpen={!!openDays[3]} onToggle={() => toggleDay(3)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Németh Gábor</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Ismételhető, tanítható AI-munkaminták kialakítása (nem személyfüggő \u201Etrükkök\u201D).`,
                `Belső tudásbázis és standard workflow alapjai.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Tudásbázis gondolkodás: források, verziók, felelősségek.`,
                `Workflow minták: szerepkörök, lépések, output sablonok.`,
                `Modell- és megoldásválasztás: mikor elég egyszerű, mikor kell kontrolláltabb megoldás.`,
                `Use case-ek előkészítése: milyen adat kell, milyen kockázat van, mi a mérőszám.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="4. nap – Use Case discovery & validáció (3×45 perc)" isOpen={!!openDays[4]} onToggle={() => toggleDay(4)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Laczkó Gábor</b> (Stylers)</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `„Jó ötletből" döntésre érett use case: üzleti érték + megvalósíthatóság.`,
                `Top 3 use case kiválasztása portfólió-szinten.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Use case gyűjtés és tisztázás: mi számít valódi üzleti problémának.`,
                `SIPOC-alapú keretezés: folyamat, érintettek, hatókör.`,
                `7 pontos validáció: érték, mérőszám, ROI, komplexitás, megoldási logika.`,
                `Prioritás és döntés: Top 3 use case rögzítése.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="5. nap – Eszközválasztás & AI ökoszisztéma (3×45 perc)" isOpen={!!openDays[5]} onToggle={() => toggleDay(5)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Tiszavölgyi Péter</b> (Stylers)</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Világos döntési logikát adni: mikor elég egyszerű megoldás, mikor kell komolyabb építkezés.`,
                `Ökoszisztéma-szemlélet: felhasználói, workflow, adat, modell, governance szint.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Miért nem működik az „eszközlista" gondolkodás.`,
                `Low-code/no-code és agentic működés: mikor hasznos, mikor kockázatos.`,
                `Döntési fa: feladat, adatérzékenység, kontroll, skála.`,
                `Könyvelőirodai minták: hol tud gyorsan értéket adni, hol nem.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="6. nap – Low-code / No-code alapok (3×45 perc)" isOpen={!!openDays[6]} onToggle={() => toggleDay(6)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Vajky Gergő</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Megmutatni, hogyan lehet fejlesztői tudás nélkül „kicsi, de hasznos" automatizációkat építeni.`,
                `Nem „programozás": vizuális eszközök, összekötések, kontrollpontok.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Mit érdemes automatizálni könyvelőirodában (biztonságos scope-ok).`,
                `Adatáramlás: input → feldolgozás → output; hol kell emberi ellenőrzés.`,
                `Minőségkapuk és hibakezelés: hogyan ne „csússzon el" a rendszer.`,
                `Dokumentálás: mi az a minimum, amitől auditálható marad.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="7. nap – Szakértői márka és digitális jelenlét – hogyan találjanak rád az ügyfelek az AI-korszakban (3×45 perc)" isOpen={!!openDays[7]} onToggle={() => toggleDay(7)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Pásti Edina</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <p className="mt-2 text-sm leading-relaxed">
                Ez a nap arról szól, hogy a szakmai tudásod önmagában már nem elég — láthatóvá is kell tenned. A résztvevő megtanulja, hogyan pozicionálja magát szakértőként a saját piacán, hogyan építsen fel olyan digitális jelenlétet, ami nem „marketinges hype", hanem hiteles, szakmai alapú kommunikáció. Megérti, hogyan működik ma a keresés — beleértve az AI-alapú keresőket is —, és hogyan gondoskodhat arról, hogy az irodája ott legyen, ahol a potenciális ügyfelek keresnek. A nap végére képes lesz AI-jal piackutatást végezni, versenytársakat elemezni, hatékony ajánlati anyagot összerakni, és egy saját tartalomgyártó rendszert felépíteni, amivel következetesen és hitelesen tud kommunikálni — anélkül, hogy marketingesnek kellene lennie.
              </p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Tervezett tematika</p>
              <CheckList items={[
                `A könyvelő mint szakértő – hogyan kommunikálj érthetően a saját célközönségednek, AI segítségével`,
                `Miért nem elég ma már az ajánlás? Pozicionálás és szakértői márka az AI-vezérelte piacon`,
                `Lokális marketing és Google Cégem – hogyan találjanak rád a környékeden, mielőtt az AI válaszol helyetted`,
                `Hogyan találnak ránk az AI keresők? SEO és GEO alapok`,
                `Piackutatás és versenytárselemzés AI-jal – mit csinálnak mások, te mit csinálj másképp`,
                `Onepager és ajánlati anyag percek alatt – professzionális anyagok, amihez eddig ügynökség kellett`,
                `Tartalomstratégia: hol kommunikálj és miért – döntési logika, amit az AI tesz kivitelezhetővé`,
                `Tartalomgyártás AI-jal – saját szakterületi tartalmak gyorsan, hitelesen, saját tartalomgyártó AI asszisztens építése`,
              ]} />
            </DayAccordion>

            <DayAccordion title="8. nap – AI a könyvelőiroda mindennapjaiban – gyorsabb kommunikáció, okosabb folyamatok, kevesebb admin (3×45 perc)" isOpen={!!openDays[8]} onToggle={() => toggleDay(8)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Pásti Edina</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <p className="mt-2 text-sm leading-relaxed">Ez a nap a napi irodai valóságról szól: e-mailek, ügyfélkérdések, ajánlatok, dokumentumok, prezentációk — minden, ami időt visz, de nem termel értéket. A résztvevő megtanulja, hogyan lehet ezeket a feladatokat AI-jal rendszerszinten felgyorsítani úgy, hogy a minőség és az iroda szakmai hangja megmaradjon. Nem arról van szó, hogy „a gép válaszol helyetted", hanem arról, hogy a rutinfeladatokra fordított idő töredékére csökken — miközben a kommunikáció következetes, az output professzionális. A nap végére a résztvevő saját AI asszisztenst épít konkrét irodai feladatokra, és kézzel fogható eszközöket visz haza: sablonokat, workflow-kat, dashboard-ot.</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Tervezett tematika</p>
              <CheckList items={[
                `Ügyfélkérdések kezelése AI-jal – sablonok, gyors válaszok, hangnem megőrzése`,
                `E-mail kommunikáció gyorsítása AI-jal – nehéz helyzetek, fizetési felszólítás, ügyfélkapcsolat`,
                `Árajánlat-adási folyamat gyorsítása – az ajánlattól a lezárásig, AI-jal támogatva`,
                `AI asszisztens építése saját feladatokra – személyre szabott megoldás, fejlesztői tudás nélkül`,
                `Prezentáció és vizuális anyagkészítés AI-jal – professzionális output percek alatt`,
                `Dokumentumok feldolgozása AI-jal – gyorsabb feldolgozás, kevesebb manuális munka`,
                `Az iroda hangja – következetes kommunikáció és stílus, AI-jal skálázva`,
                `Saját dashboard összeállítása AI-jal – napi feladatlista, projektek haladása, átlátható kontroll`,
              ]} />
            </DayAccordion>

            <DayAccordion title="9. nap – EU jogszabály & Data Governance (3×45 perc)" isOpen={!!openDays[9]} onToggle={() => toggleDay(9)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Dr. Firniksz Judit</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `EU AI szabályozási keretrendszer megértése és gyakorlati alkalmazása.`,
                `Működő AI és data governance rendszer kiépítése a cégen belül.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `AI Act, GDPR, Data Act, DSA, DMA és kapcsolódó adatjogi keretek.`,
                `Értelmezési kérdések, kötelezettségek, felelősségek.`,
                `Hogyan építs ki működő AI governance rendszert a cégen belül?`,
                `Data governance + AI governance + információbiztonság összekötése.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="10. nap – Blockchain, DÁP & digitális eszközök (3×45 perc)" isOpen={!!openDays[10]} onToggle={() => toggleDay(10)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Keresni kell ide még</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Blockchain technológia és a Digitális Állampolgári Portál (DÁP) megértése könyvelői szemszögből.`,
                `Digitális eszközök pénzügyi és könyvelési hatásainak feltérképezése.`,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `Blockchain alapok: tokenek, intelligens szerződések, decentralizált rendszerek.`,
                `Kriptovaluták könyvelése – alap logikák, tipikus esetek.`,
                `Digitális Állampolgári Portál (DÁP): funkciók, adatkapcsolatok, könyvelői relevanciák.`,
                `Digitális eszközök pénzügyi hatása: beszámoló és kockázat szempontból.`,
              ]} />
            </DayAccordion>

            <DayAccordion title="11. nap – ROI, skálázás és lezárás (90 napos akcióterv)" isOpen={!!openDays[11]} onToggle={() => toggleDay(11)}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2">Oktató</p>
              <p><b>Koltai Balázs</b></p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Cél</p>
              <CheckList items={[
                `Összerakni a teljes képet: mérés, ROI, skálázás, változáskezelés.`,
                <>A résztvevő egy konkrét <b>90 napos tervvel</b> és <b>vezetői összefoglalóval</b> zár.</>,
              ]} />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mt-2.5">Témák</p>
              <CheckList items={[
                `ROI-keret: működési és üzleti hatások mérése (nem csak pénzügy).`,
                `Mikor és hogyan skálázunk use case-t: döntési kapuk és kontrollpontok.`,
                `Stratégia + governance + kultúra: hogyan lesz \u201Eüzemszerű\u201D a változás.`,
                `Vezetői döntéselőkészítő anyag: támogatás megszerzése, jóváhagyás.`,
              ]} />
            </DayAccordion>

            <Note>
              <b>Megjegyzés:</b> ahol {`\u201EKeresni kell ide még\u201D`} szerepel, oda vagy javasolt szakértőt írunk be, vagy közösen választunk oktatót.
            </Note>
          </div>
        </div>
      </section>

      {/* Eredmények */}
      <section id="outcomes" className="py-20 px-[5%]">
        <div className="max-w-content mx-auto">
          <InfoCard>
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Mit kap kézzelfoghatóan a résztvevő?</h2>
            <CheckList items={[
              <><b>Top 3 validált use case</b> (érték + kockázat + megvalósíthatóság vázlat)</>,
              <><b>ROI keret</b> (mérőszámok, döntési kapuk, prioritás logika)</>,
              <><b>Governance alapváz</b> (hozzáférés, adatkezelés, audit nyomvonal – minimum szint)</>,
              <><b>90 napos akcióterv</b> (pilot → mérés → skálázás)</>,
              <><b>Standard workflow minták</b> (dokumentálható működéshez)</>,
            ]} />
          </InfoCard>
        </div>
      </section>

      {/* Next step */}
      <section id="cta" className="section-purple py-20 px-[5%]">
        <div className="max-w-content mx-auto">
          <InfoCard>
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight">Next step</h2>
            <p className="mt-3.5 font-semibold text-foreground">
              Ha a célod nem az, hogy {`\u201EAI-t használj\u201D`}, hanem az, hogy AI-val működj – stabilan, mérhetően, megfeleléssel – akkor ez a program jó irány.
            </p>
            <Note>
              <b>Döntés:</b> jóváhagyjuk-e a 11 napos struktúrát és a {`\u201Erendszerszintű\u201D`} pozicionálást?<br /><br />
              <b>Következő lépés:</b> oktatói napok és témák rögzítése, minősítési logika véglegesítése.<br /><br />
              <b>Output:</b> public landing + programfüzet + vizsga/értékelési keret.
            </Note>
            <p className="text-muted-foreground text-lg mt-2.5">
              Ha a képzés logikája és a napok bontása rendben, a következő körben <b>naponkénti 4×45 perces</b> belső óratervet (blokkonként) is le tudjuk rakni,
              és véglegesíthetjük a {`\u201EKeresni kell\u201D`} oktatókat.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-[18px]">
              <button onClick={() => window.print()} className="inline-flex items-center justify-center rounded-lg px-[18px] py-3 font-semibold text-sm border border-primary/50 text-primary bg-transparent hover:bg-primary/[0.06] transition-all">
                Nyomtatás / PDF
              </button>
            </div>
          </InfoCard>
        </div>
      </section>

      <footer className="py-10 px-[5%] border-t border-border text-muted-foreground text-[13px]">
        <div className="max-w-content mx-auto">
          <b>Megjegyzés:</b> Ez a dokumentum a képzés tematikájának egyeztetésére készült.
        </div>
      </footer>
    </div>
  );
};

export default Index;
