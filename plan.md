# Plan i dnevnik izmena — Pčelarsko gazdinstvo MeDišić

Dvojezičan (SR/EN) statički sajt. Ovaj fajl služi kao trajni zapis svih urađenih i planiranih izmena.

**Domen (placeholder):** `https://www.medisic.rs`  
**Lokalni pregled:** `http://localhost:5173/`

---

## Stalna pravila

- Ne mešati SR i EN tekst u istom content bloku
- Jedan H1 po stranici
- Bez keyword stuffing-a
- CTA jasno vidljiv iznad pregiba i pri dnu stranice
- Svaka slika mora imati alt tekst
- Spoljne linkove otvarati sa `rel="noopener noreferrer"`
- Structured data samo za ono što je stvarno prikazano korisniku

---

## Struktura ruta

| SR | EN |
|----|-----|
| `/` | `/en/` |
| `/o-nama/` | `/en/about/` |
| `/proizvodi/` | `/en/products/` |
| `/bagremov-med/` | `/en/acacia-honey/` |
| `/domace-rakije/` | `/en/fruit-brandies/` |
| `/galerija/` | `/en/gallery/` |
| `/kontakt/` | `/en/contact/` |

---

## Dnevnik izmena

### 2026-07-10 — Prave fotografije (lični ton)

#### Mediji
- Originali iz `galerija/` konvertovani u WebP i raspoređeni u `assets/img/`
- `farm/` — `medar-nemanja.webp`, `medisic-ram.webp` (lice gazdinstva + ram „Medišić 2020“)
- `products/` — bagremov med, medovi, saće, suncokretov med; `rakije/preview.webp` + `hero.webp`
- `gallery/` — 12 fotografija za grid i lightbox
- `brand/og-default.webp` — 1200×630 crop od Nemanjine fotografije

#### Gde su ubačene
- **Početna (SR/EN)** — Nemanja u „O gazdinstvu“, tegla i rakija u proizvodima, suncokretov med u „Zašto med“, preview galerije
- **O nama (SR/EN)** — Nemanja (intro), ram Medišić (priča), saće (košnice)
- **Bagremov med / Proizvodi / Rakije / Kontakt** — SVG placeholderi zamenjeni odgovarajućim WebP snimcima
- **Galerija (SR/EN)** — ceo grid na pravim fotografijama; filteri: Rad, Pčele, Med, Proizvodi

#### Ostalo
- Alt tekstovi usklađeni sa sadržajem snimaka (SR/EN)
- Placeholder SVG ostaju samo gde još nema fotke (polen, propolis, vosak, pojedinačne rakije, nagrade, hero poster)
- U git idu samo optimizovani WebP u `assets/img/` (sirovi originali u `galerija/` ostaju lokalno)

---

### 2026-07-09 — Početni build sajta

#### Arhitektura i layout
- Predložena i kreirana struktura foldera (pages, assets, shared, seo)
- Globalni sticky header, lettermark **MeDišić**, navigacija SR/EN
- Language switcher kao crawlable HTML linkovi (hreflang parovi)
- Footer sa internim linkovima, Instagramom, kontaktom i CTA trakom
- Shared CSS: `tokens.css`, `base.css`, `layout.css`, `components.css`, `pages.css`
- Shared JS: `main.js` (nav, a11y, hero video)

#### Stranice (SR + EN)
- **Početna** — hero (video slot + poster), o gazdinstvu, proizvodi, zašto med, rakije, galerija preview, CTA
- **O nama** — priča, prirodna proizvodnja, košnice, proizvodi, Instagram
- **Proizvodi** — featured bagremov med, pčelinji proizvodi, rakije, kako poručiti
- **Bagremov med** — SEO landing + Product schema
- **Domaće rakije** — proizvodnja, priznanja (placeholderi), ponuda, CTA „Zatražite ponudu“
- **Galerija** — responzivan grid, lazy loading, lagani lightbox (`gallery.js`)
- **Kontakt** — forma sa validacijom, telefon, Instagram, slot za adresu (`contact-form.js`)

#### SEO
- Title, meta description, canonical, Open Graph, `og:image:alt` na svim stranicama
- Hreflang (sr, en, x-default) — apsolutni URL-ovi, self-referencing
- `sitemap.xml` sa xhtml hreflang parovima
- `robots.txt`
- Breadcrumbs (vizuelno) + `BreadcrumbList` JSON-LD na unutrašnjim stranicama
- Dokumentacija: `seo/META-CATALOG.md`, `seo/GUIDELINES.md`, `seo/README.md`

#### Analytics (GA4)
- `gtag.js` + `assets/js/analytics.js` (placeholder `GA_MEASUREMENT_ID`)
- Eventi: `page_view`, `cta_click`, `contact_form_submit`
- Uputstvo: `seo/GA4.md`

#### JSON-LD
- Početna: `Organization` + `WebSite` (`@graph`, `@id`)
- Kontakt: `LocalBusiness` (isti `@id` kao organizacija)
- Bagremov med: `Product` (bez Offer/cena/reviews)
- Proizvodi hub: `ItemList`
- Mapa: `seo/SCHEMA.md`

#### Ostalo
- Placeholder SVG mediji (hero, proizvodi, galerija)
- Slot za hero video: `assets/video/hero/`
- Shared snippeti: `shared/sr/`, `shared/en/`, `shared/sections/`

---

## Otvoreno / sledeći koraci

- [ ] Potvrditi pravi domen i zameniti `www.medisic.rs` ako treba
- [ ] Ubaci pravi `GA_MEASUREMENT_ID` (HTML + `analytics.js`)
- [ ] Zameniti placeholder telefon, email, Instagram URL, adresu
- [x] Ubaci prave fotografije (WebP) — 2026-07-10
- [ ] Ubaci hero video (WebM/MP4)
- [x] Ubaci pravi `og-default.webp` (1200×630) — crop od Nemanjine fotografije
- [ ] Dopuniti fotke: košnice, boce rakija, nagrade (trenutno još SVG)
- [ ] Dopuniti asortiman rakija i nagrade → tada Product schema na rakijama
- [ ] Povezati kontakt formu na backend / form servis
- [ ] Self-hostovati fontove (umesto Google Fonts) radi CWV
- [ ] Submit sitemap u Google Search Console
- [ ] Rich Results Test za JSON-LD

---

## Kako ažurirati ovaj fajl

Pri svakoj većoj izmeni dodati novi datumski blok u **Dnevnik izmena** i po potrebi ažurirati checklistu **Otvoreno / sledeći koraci**.
