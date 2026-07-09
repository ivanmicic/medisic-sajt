# SEO meta katalog — Pčelarsko gazdinstvo MeDišić

Baza domena: `https://www.medisic.rs`  
Pravilo: title ≈ 50–60 znakova, description ≈ 140–160 znakova.  
OG title/description = isti kao title/description (osim gde je description skraćen za OG).  
Canonical = self. Hreflang = sr + en + x-default (apsolutni URL-ovi).

---

## Jezički parovi

| SR URL | EN URL |
|--------|--------|
| `/` | `/en/` |
| `/o-nama/` | `/en/about/` |
| `/proizvodi/` | `/en/products/` |
| `/bagremov-med/` | `/en/acacia-honey/` |
| `/domace-rakije/` | `/en/fruit-brandies/` |
| `/galerija/` | `/en/gallery/` |
| `/kontakt/` | `/en/contact/` |

---

## Srpski

### Početna `/`
- **title:** Pčelarsko gazdinstvo MeDišić \| Prirodni bagremov med
- **description:** Porodično pčelarsko gazdinstvo MeDišić. Prirodni bagremov med i nagrađivane domaće rakije. Naručite direktno od proizvođača.
- **canonical:** https://www.medisic.rs/
- **og:image:** https://www.medisic.rs/assets/img/brand/og-default.webp

### O nama `/o-nama/`
- **title:** O nama \| Pčelarsko gazdinstvo MeDišić
- **description:** Upoznajte porodično pčelarsko gazdinstvo MeDišić. Prirodni bagremov med iz pažljivo negovanih košnica i nagrađivane domaće rakije.
- **canonical:** https://www.medisic.rs/o-nama/

### Proizvodi `/proizvodi/`
- **title:** Naši proizvodi \| Pčelarsko gazdinstvo MeDišić
- **description:** Prirodni bagremov med, pčelinji proizvodi i domaće rakije sa gazdinstva MeDišić. Naručite direktno od proizvođača.
- **canonical:** https://www.medisic.rs/proizvodi/

### Bagremov med `/bagremov-med/`
- **title:** Bagremov med \| Prirodni med – Pčelarsko gazdinstvo MeDišić
- **description:** Bagremov med sa gazdinstva MeDišić — prirodan med iz pažljivo negovanih košnica. Blag ukus, svetla boja. Naručite direktno od proizvođača.
- **canonical:** https://www.medisic.rs/bagremov-med/
- **og:type:** product
- **og:image:** https://www.medisic.rs/assets/img/products/bagremov-med.svg

### Domaće rakije `/domace-rakije/`
- **title:** Domaće rakije \| Nagrađivani proizvodi – MeDišić
- **description:** Domaće kvalitetne rakije sa gazdinstva MeDišić. Autentičan ukus i nagrade sa takmičenja u Srbiji. Zatražite ponudu.
- **canonical:** https://www.medisic.rs/domace-rakije/

### Galerija `/galerija/`
- **title:** Galerija \| Pčelarstvo i med – MeDišić
- **description:** Galerija pčelarskog gazdinstva MeDišić: košnice, pčele, rad na pčelinjaku, prirodni med i domaći proizvodi. Trenuci sa Instagram naloga.
- **canonical:** https://www.medisic.rs/galerija/

### Kontakt `/kontakt/`
- **title:** Kontakt i poručivanje \| Pčelarsko gazdinstvo MeDišić
- **description:** Kontakt i poručivanje meda sa pčelarskog gazdinstva MeDišić. Pošaljite poruku, nazovite ili pišite na Instagramu — naručite bagremov med i domaće rakije.
- **canonical:** https://www.medisic.rs/kontakt/

---

## English

### Home `/en/`
- **title:** MeDišić Beekeeping Farm \| Natural acacia honey
- **description:** MeDišić family beekeeping farm. Natural acacia honey and award-winning homemade fruit brandies. Order directly from the producer.
- **canonical:** https://www.medisic.rs/en/

### About `/en/about/`
- **title:** About us \| MeDišić Beekeeping Farm
- **description:** Meet the MeDišić family beekeeping farm. Natural acacia honey from carefully tended hives and award-winning homemade fruit brandies.
- **canonical:** https://www.medisic.rs/en/about/

### Products `/en/products/`
- **title:** Our products \| MeDišić Beekeeping Farm
- **description:** Natural acacia honey, bee products and homemade fruit brandies from MeDišić farm. Order directly from the producer.
- **canonical:** https://www.medisic.rs/en/products/

### Acacia honey `/en/acacia-honey/`
- **title:** Acacia honey \| Natural honey – MeDišić Beekeeping Farm
- **description:** Acacia honey from MeDišić farm — natural honey from carefully tended hives. Mild taste, light colour. Order directly from the producer.
- **canonical:** https://www.medisic.rs/en/acacia-honey/
- **og:type:** product

### Fruit brandies `/en/fruit-brandies/`
- **title:** Homemade fruit brandies \| Award-winning – MeDišić
- **description:** Quality homemade fruit brandies from MeDišić farm. Authentic taste and awards from competitions in Serbia. Request a quote.
- **canonical:** https://www.medisic.rs/en/fruit-brandies/

### Gallery `/en/gallery/`
- **title:** Gallery \| Beekeeping and honey – MeDišić
- **description:** Gallery of MeDišić beekeeping farm: hives, bees, apiary work, natural honey and homemade products. Moments from our Instagram.
- **canonical:** https://www.medisic.rs/en/gallery/

### Contact `/en/contact/`
- **title:** Contact and ordering \| MeDišić Beekeeping Farm
- **description:** Contact and honey ordering from MeDišić beekeeping farm. Send a message, call or write on Instagram — order acacia honey and homemade brandies.
- **canonical:** https://www.medisic.rs/en/contact/

---

## Obavezni head tagovi (šablon)

```html
<link rel="canonical" href="https://www.medisic.rs/{path}/">
<link rel="alternate" hreflang="sr" href="https://www.medisic.rs/{sr-path}/">
<link rel="alternate" hreflang="en" href="https://www.medisic.rs/{en-path}/">
<link rel="alternate" hreflang="x-default" href="https://www.medisic.rs/">

<meta property="og:type" content="website">
<meta property="og:locale" content="sr_RS"> <!-- ili en_US -->
<meta property="og:locale:alternate" content="en_US"> <!-- ili sr_RS -->
<meta property="og:site_name" content="Pčelarsko gazdinstvo MeDišić">
<meta property="og:title" content="…">
<meta property="og:description" content="…">
<meta property="og:url" content="https://www.medisic.rs/{path}/">
<meta property="og:image" content="https://www.medisic.rs/assets/img/brand/og-default.webp">
<meta property="og:image:alt" content="…">
<meta name="twitter:card" content="summary_large_image">
```

Napomena: zameniti `og-default.webp` pravom slikom 1200×630 px pre produkcije.
