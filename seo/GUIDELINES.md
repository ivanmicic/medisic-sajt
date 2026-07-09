# SEO smernice — MeDišić

## 1. Interna link struktura

### Hijerarhija
```
/ (hub)
├── /o-nama/
├── /proizvodi/          ← hub proizvoda
│   ├── /bagremov-med/   ← prioritetni landing
│   └── /domace-rakije/
├── /galerija/
└── /kontakt/            ← conversion
```

### Pravila
- Svaka stranica linkuje ka `/kontakt/` (CTA iznad pregiba + footer).
- `/proizvodi/` linkuje ka `/bagremov-med/` i `/domace-rakije/`.
- Product landingi linkuju nazad ka `/proizvodi/` i unakrsno (med ↔ rakije) gde ima smisla.
- Početna teaser-uje: o nama, proizvodi, galerija, kontakt.
- Language switcher uvek vodi na **tačan jezički par**, ne na početnu.
- Anchor tekst: prirodan („Bagremov med“, „Naručite“), ne „kliknite ovde“.
- Spoljni linkovi: `target="_blank" rel="noopener noreferrer"`.

### Prioritet crawl putanje
1. Početna → Bagremov med → Kontakt  
2. Početna → Proizvodi → Bagremov med / Rakije → Kontakt  
3. O nama → Proizvodi / Kontakt  

---

## 2. URL slugovi

| SR | EN | Napomena |
|----|-----|----------|
| `/` | `/en/` | Trailing slash |
| `/o-nama/` | `/en/about/` | Kratko, čitljivo |
| `/proizvodi/` | `/en/products/` | Hub |
| `/bagremov-med/` | `/en/acacia-honey/` | Jedna SEO tema |
| `/domace-rakije/` | `/en/fruit-brandies/` | Bez dijakritika u EN |
| `/galerija/` | `/en/gallery/` | |
| `/kontakt/` | `/en/contact/` | |

### Konvencije
- Mala slova, crtice, bez `_` i bez query stringova za sadržaj.
- Trailing slash na svim folder stranicama.
- Jedan slug = jedna tema; ne mešati „med-i-rakije“ u jedan URL.
- Ne menjati slugove posle indeksiranja bez 301 redirecta.
- SR slugovi mogu imati latinične reči bez dijakritika gde je praksa (`o-nama`, ne `o-nama-gazdinstvo-medisic`).

---

## 3. Breadcrumbs

### Vizuelno (sve unutrašnje stranice)
```
Početna › Proizvodi › Bagremov med
Home › Products › Acacia honey
```

### Semantika
- `<nav aria-label="Putanja">` + `<ol>`
- Poslednja stavka: `aria-current="page"`, bez linka
- Početna uvek prva

### BreadcrumbList JSON-LD
Dodati samo ako je breadcrumb **vidljiv** na stranici. Primer za bagremov med:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Početna",
      "item": "https://www.medisic.rs/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Proizvodi",
      "item": "https://www.medisic.rs/proizvodi/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bagremov med",
      "item": "https://www.medisic.rs/bagremov-med/"
    }
  ]
}
```

### Mapa breadcrumbs

| Stranica | Trail (SR) |
|----------|------------|
| O nama | Početna › O nama |
| Proizvodi | Početna › Proizvodi |
| Bagremov med | Početna › Proizvodi › Bagremov med |
| Domaće rakije | Početna › Proizvodi › Domaće rakije |
| Galerija | Početna › Galerija |
| Kontakt | Početna › Kontakt |

---

## 4. Alt tekst standardi

### Pravila
1. Opisuj **šta se vidi**, ne keyword listu.
2. Jezik alt-a = jezik stranice (SR / EN odvojeno).
3. Uključi kontekst gde pomaže: „Tegla prirodnog bagremovog meda sa gazdinstva MeDišić“.
4. Max ~125 znakova; jedna jasna rečenica.
5. Dekorativne SVG/ikone: `alt=""` + `aria-hidden="true"` ako nemaju informaciju.
6. Ne počinji sa „Slika…“ / „Image of…“.
7. Za galeriju: jedinstven alt po fotografiji (ne „galerija 1, 2, 3“).
8. CTA dugmad su tekstualna — ne oslanjaj se na alt za CTA.

### Dobri primeri (SR)
- `Tegla prirodnog bagremovog meda sa gazdinstva MeDišić`
- `Drvene košnice u nizu na pčelinjaku`
- `Pčela na medonosnom cvetu tokom bagremove paše`
- `Boce domaće šljivovice MeDišić`

### Loši primeri
- `med med bagremov med prirodni med kupi med`
- `IMG_4021.jpg`
- `slika`
- prazan alt na sadržajnoj fotografiji

### Fajlovi
- Imena fajlova: `bagremov-med-tegla.webp`, `kosnice-pcelinjak-01.webp`
- Preferirati WebP; držati `width` / `height` / `loading="lazy"` / `decoding="async"`
- Hero / LCP: bez lazy, `fetchpriority="high"`

---

## 5. Hreflang checklist

Na **svakoj** stranici:
- [ ] `hreflang="sr"` → SR URL (uključujući self)
- [ ] `hreflang="en"` → EN URL (uključujući self)
- [ ] `hreflang="x-default"` → `https://www.medisic.rs/`
- [ ] Apsolutni HTTPS URL-ovi
- [ ] Canonical = self URL
- [ ] Parovi usklađeni u `sitemap.xml` (`xhtml:link`)

---

## 6. Pre produkcije

1. Zameniti domen ako nije `www.medisic.rs`.
2. Dodati pravi `assets/img/brand/og-default.webp` (1200×630).
3. Ažurirati `lastmod` u sitemap-u pri većim izmenama.
4. Poslati sitemap u Google Search Console (SR + EN property ili domain property).
5. Zameniti placeholder telefon / email / Instagram / adresu — pa ažurirati LocalBusiness schema.
