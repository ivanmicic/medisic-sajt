# JSON-LD schema mapa — MeDišić

Pravilo: samo podaci koji su **vidljivi** na stranici. Bez cene, availability, reviews i ulične adrese dok nisu potvrđeni.

Stabilni `@id` entiteti:
- Organizacija: `https://www.medisic.rs/#organization`
- WebSite (SR): `https://www.medisic.rs/#website`
- WebSite (EN): `https://www.medisic.rs/en/#website`
- Bagremov med: `https://www.medisic.rs/bagremov-med/#product`
- Acacia honey: `https://www.medisic.rs/en/acacia-honey/#product`

`sameAs`: Instagram URL — zameniti pravim profilom kada bude potvrđen.

---

## Koji tip ide na koju stranicu

| Stranica | Schema tipovi | Napomena |
|----------|---------------|----------|
| `/` | `Organization` + `WebSite` (`@graph`) | Početna — brend + sajt |
| `/en/` | `Organization` + `WebSite` | Isto, EN |
| `/kontakt/` | `LocalBusiness` + `BreadcrumbList` | Isti `@id` kao Organization; kontakt podaci sa stranice |
| `/en/contact/` | `LocalBusiness` + `BreadcrumbList` | Isto |
| `/bagremov-med/` | `Product` + `BreadcrumbList` | Bez Offer / AggregateRating |
| `/en/acacia-honey/` | `Product` + `BreadcrumbList` | Isto |
| `/proizvodi/` | `ItemList` + `BreadcrumbList` | Hub — link ka proizvodima |
| `/en/products/` | `ItemList` + `BreadcrumbList` | Isto |
| `/domace-rakije/` | samo `BreadcrumbList` | Nema Product dok nisu finalni opisi/nagrade |
| `/en/fruit-brandies/` | samo `BreadcrumbList` | Isto |
| `/o-nama/`, `/galerija/` (+ EN) | samo `BreadcrumbList` | Dovoljno; bez izmišljenog AboutPage detalja |

### Zašto ne Product na rakijama
Stranica ima placeholder slotove za vrste i nagrade. Product schema ide tek kada su naziv, opis i slika stvarno prikazani kao finalni sadržaj.

### Kada proširiti LocalBusiness
Kad bude javna ulica/grad, dodati u `address` (i na stranici):
`streetAddress`, `addressLocality`, `postalCode` — pa tek onda u JSON-LD.

---

## Primer: početna (`/`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.medisic.rs/#organization",
      "name": "Pčelarsko gazdinstvo MeDišić",
      "url": "https://www.medisic.rs/",
      "description": "Porodično pčelarsko gazdinstvo. Prirodni bagremov med i domaće rakije.",
      "email": "info@medisic.rs",
      "telephone": "+381600000000",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "RS"
      },
      "sameAs": [
        "https://www.instagram.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.medisic.rs/#website",
      "url": "https://www.medisic.rs/",
      "name": "Pčelarsko gazdinstvo MeDišić",
      "inLanguage": "sr",
      "publisher": {
        "@id": "https://www.medisic.rs/#organization"
      }
    }
  ]
}
```

---

## Primer: Bagremov med (`/bagremov-med/`)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.medisic.rs/bagremov-med/#product",
  "name": "Bagremov med",
  "description": "Prirodan bagremov med iz pažljivo negovanih košnica. Blag ukus, svetla boja, jasan karakter bagremove paše.",
  "url": "https://www.medisic.rs/bagremov-med/",
  "image": [
    "https://www.medisic.rs/assets/img/products/bagremov-med.svg",
    "https://www.medisic.rs/assets/img/products/honey-detail-1.svg",
    "https://www.medisic.rs/assets/img/products/honey-jar.svg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "MeDišić"
  },
  "manufacturer": {
    "@id": "https://www.medisic.rs/#organization"
  },
  "category": "Prirodni med"
}
```

(+ poseban `BreadcrumbList` blok na istoj stranici.)

---

## Validacija

1. [Google Rich Results Test](https://search.google.com/test/rich-results)
2. [Schema Markup Validator](https://validator.schema.org/)
3. Posle zamene placeholdera (telefon, Instagram, adresa) — ponovo testirati.
