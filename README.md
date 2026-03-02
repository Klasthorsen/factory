# PEAK Academy

En modern webbplats för yrkeshögskolan PEAK Academy, byggd med React och Vite.

**Live demo:** https://my-website-amber-mu.vercel.app

---

## Design

### Visuell identitet
Webbplatsen är byggd utifrån en Figma-design med PEAK Academys grafiska profil. Den visuella identiteten kännetecknas av:

- **Färgpalett:** Teal (#008080) som primärfärg, grön (#C8E6C9) som accentfärg, samt neutrala gråtoner för bakgrunder och text
- **Typografi:** DM Sans för rubriker och brödtext, med tydlig hierarki mellan H1-H4 och paragraftext
- **Bildspråk:** Stora hero-bilder med gradient-overlay för läsbarhet, samt kurskort med konsekvent bildformat

### Responsiv design
Webbplatsen är fullt responsiv med tre huvudsakliga brytpunkter:

| Brytpunkt | Viewport | Anpassningar |
|-----------|----------|--------------|
| Desktop | > 1024px | Fullbredd-layout, 3-kolumns grid för kurser |
| Tablet | 768-1024px | 2-kolumns grid, komprimerad navigation |
| Mobil | < 768px | 1-kolumns layout, hamburger-meny med slide-in panel |

### Komponenter
- **Navbar:** Sticky navigation med logo, länkar och CTA-knapp. På mobil: hamburger-meny med animerad ikon och overlay
- **Hero:** Fullbreddsbild med gradient-overlay, rubrik och call-to-action
- **CourseCard:** Kort med bild, taggar (plats, längd, tempo), statusindikator och länk
- **FAQ:** Accordion-komponent med expanderbara frågor/svar
- **Footer:** Tre-kolumns layout med navigering, kontaktinfo och sociala medier

---

## Teknik

### Stack
| Kategori | Teknologi |
|----------|-----------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | CSS (CSS Variables, Flexbox, Grid) |
| Linting | ESLint 9 |
| Hosting | Vercel |

### Projektstruktur
```
src/
├── components/          # Återanvändbara UI-komponenter
│   ├── Navbar.jsx/css
│   ├── Footer.jsx/css
│   ├── Hero.jsx/css
│   ├── CourseCard.jsx/css
│   └── FAQ.jsx/css
├── pages/               # Sidkomponenter
│   ├── Home.jsx/css
│   ├── Courses.jsx/css
│   ├── CourseDetail.jsx/css
│   ├── About.jsx/css
│   ├── Contact.jsx/css
│   └── Apply.jsx/css
├── data/
│   └── courses.js       # Kursdata och viktiga datum
├── styles/
│   └── global.css       # Globala stilar och CSS-variabler
├── App.jsx              # Huvudkomponent med routing
└── index.css            # Entry-point för stilar
```

### Funktionalitet
- **Routing:** Client-side routing med React Router för snabb navigering utan sidladdningar
- **Filtrering:** Kurslistan kan filtreras på status (öppen/stängd ansökan) och plats
- **Formulär:** Kontaktformulär och flerstegs-ansökningsformulär med validering
- **State management:** React hooks (useState, useEffect) för lokal state
- **Accessibility:** ARIA-attribut för menyknapp, semantisk HTML-struktur

### Kommandon
```bash
npm install      # Installera dependencies
npm run dev      # Starta utvecklingsserver (http://localhost:5173)
npm run build    # Bygg för produktion
npm run lint     # Kör ESLint
npm run preview  # Förhandsgranska produktionsbygge
```

---

## Innehåll

### Sidor

#### Startsida (/)
- Hero-sektion med huvudbudskap och CTA
- Populära utbildningar (3 kurskort)
- Viktiga datum (ansökningsperioder)
- FAQ-sektion med vanliga frågor
- Informationskort om CSN och LIA
- Call-to-action för att hitta utbildning

#### Våra utbildningar (/utbildningar)
- Hero med introduktionstext
- Filtreringspanel (status, plats)
- Grid med alla tillgängliga kurser
- Varje kort visar: titel, startdatum, plats, längd, tempo, status

#### Utbildningsdetalj (/utbildningar/:id)
- Hero med kursbild och grundinfo
- Sidebar med utbildningsfakta (startdatum, plats, längd, CSN-info)
- Fullständig kursbeskrivning
- Vad du lär dig (punktlista)
- Karriärmöjligheter
- Behörighetskrav
- CTA för ansökan eller kontakt

#### Om oss (/om-oss)
- Vision och mission
- Värderingskort (Kvalitet, Branschnära, Individuellt fokus, Innovation)
- Statistiksektion (95% får jobb, 500+ utexaminerade, 50+ samarbetsföretag)
- Call-to-action

#### Kontakta oss (/kontakt)
- Kontaktformulär (namn, e-post, telefon, ämne, meddelande)
- Kontaktuppgifter (e-post, telefon, adress, öppettider)
- Bekräftelsemeddelande efter inskickat formulär

#### Ansök (/ansok, /ansok/:id)
Flerstegsformulär med tre steg:
1. **Välj utbildning:** Radioknappar för tillgängliga kurser
2. **Personuppgifter:** Namn, personnummer, kontaktinfo, adress
3. **Bakgrund & Motivation:** Utbildningsbakgrund, arbetslivserfarenhet, motivering, GDPR-samtycke

### Kursutbud
Webbplatsen innehåller 6 exempelutbildningar:
- Processoperatör (Göteborg, 1 år halvfart)
- Strategisk inköpare (Stockholm, 2 år helfart)
- Rörledningsprojektör (Göteborg, 2 år helfart)
- Automationstekniker (Malmö, 2 år helfart)
- Fastighetstekniker (Stockholm, 1.5 år helfart)
- Projektledare Bygg (Göteborg, 2 år helfart)

---

## Installation

```bash
git clone https://github.com/Klasthorsen/factory.git
cd factory
npm install
npm run dev
```

## Deployment

Projektet är konfigurerat för automatisk deployment till Vercel. Push till `main`-branchen triggar en ny produktion-deploy.

```bash
vercel --prod
```

---

## Licens

MIT
