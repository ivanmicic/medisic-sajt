# Google Analytics 4 — MeDišić

## Setup

1. U GA4 kreiraj property i uzmi Measurement ID (`G-XXXXXXXXXX`).
2. Zameni **sva** pojavljivanja `GA_MEASUREMENT_ID` u projektu:
   - `assets/js/analytics.js` (konstanta `GA_MEASUREMENT_ID`)
   - `gtag/js?id=GA_MEASUREMENT_ID` u `<head>` svake HTML stranice
3. Deploy i proveri u DebugView.

## Eventi

| Event | Kada | Ključni parametri |
|-------|------|-------------------|
| `page_view` | Automatski pri učitavanju | (GA4 default) |
| `cta_click` | Klik na `[data-cta]` | `cta_id`, `cta_label`, `cta_text`, `cta_location`, `page_path`, `language` |
| `contact_form_submit` | Uspešan submit kontakt forme | `form_id`, `form_topic`, `page_path`, `language` |

### `cta_id` / `cta_label` mapa

| data-cta | cta_label | Dugme (SR) |
|----------|-----------|------------|
| `order` | `narucite` | NARUČITE |
| `contact` | `kontaktirajte_nas` | KONTAKTIRAJTE NAS |
| `quote` | `zatrazite_ponudu` | ZATRAŽITE PONUDU |

---

## Testiranje u GA4 DebugView

1. Instaliraj [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) (Chrome) **ili** dodaj `?gtm_debug=x` nije potrebno — koristi GA Debugger extension, ili u konzoli:
   ```js
   // privremeno, samo za test
   window['ga-disable-GA_MEASUREMENT_ID'] = false;
   ```
2. Bolji način: u Chrome-u otvori sajt, uključi **GA Debugger** extension, pa u GA4 idi na **Admin → DebugView** (ili Reports → DebugView u novijem UI: **Configure → DebugView**).
3. Alternativa bez extensiona — u URL dodaj debug signal preko gtag (privremeno u `analytics.js`):
   ```js
   gtag("config", GA_MEASUREMENT_ID, {
     send_page_view: true,
     debug_mode: true
   });
   ```
   Ukloni `debug_mode: true` posle testa.
4. Otvori sajt (npr. `http://localhost:5173/`), uradi:
   - učitaj stranicu → očekuj `page_view`
   - klik **Naručite** → `cta_click` (`cta_id: order`)
   - klik **Kontaktirajte nas** → `cta_click` (`cta_id: contact`)
   - na `/domace-rakije/` klik **Zatražite ponudu** → `cta_click` (`cta_id: quote`)
   - na `/kontakt/` uspešno pošalji formu → `contact_form_submit`
5. U DebugView proveri parametre (`cta_location`, `language`, `page_path`).
6. Za Realtime (bez debug moda): **Reports → Realtime** — događaji se vide uz kašnjenje od nekoliko sekundi, ali DebugView je pouzdaniji za razvoj.

## Napomena

Dok je ID i dalje literal `GA_MEASUREMENT_ID`, gtag pozivi neće stizati u pravi GA4 property — to je namerno dok ne ubaciš pravi ID.
