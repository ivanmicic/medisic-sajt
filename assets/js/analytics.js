/**
 * Google Analytics 4 — Pčelarsko gazdinstvo MeDišić
 *
 * SETUP:
 * 1. Replace GA_MEASUREMENT_ID below with your real ID (e.g. G-XXXXXXXXXX).
 * 2. Replace GA_MEASUREMENT_ID in the gtag.js <script src> in every page <head>
 *    (search the project for "GA_MEASUREMENT_ID").
 *
 * Events:
 * - page_view          — automatic via gtag('config')
 * - cta_click          — NARUČITE / KONTAKTIRAJTE NAS / ZATRAŽITE PONUDU
 * - contact_form_submit — successful contact form submit
 */
(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // REPLACE with your real GA4 Measurement ID before going live
  // Example: var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
  // ---------------------------------------------------------------------------
  var GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID";

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true
  });

  /** Map data-cta values to stable event labels */
  var CTA_LABELS = {
    order: "narucite",
    contact: "kontaktirajte_nas",
    quote: "zatrazite_ponudu"
  };

  function trackCtaClick(el) {
    if (typeof window.gtag !== "function") return;

    var ctaId = el.getAttribute("data-cta") || "unknown";
    var location = el.getAttribute("data-cta-location") || "unknown";
    var label = CTA_LABELS[ctaId] || ctaId;
    var text = (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);

    window.gtag("event", "cta_click", {
      cta_id: ctaId,
      cta_label: label,
      cta_text: text,
      cta_location: location,
      page_path: window.location.pathname,
      page_title: document.title,
      language: document.documentElement.lang || ""
    });
  }

  /**
   * Call after a successful contact form submit.
   * @param {Object} [extra]
   */
  window.trackContactFormSubmit = function (extra) {
    if (typeof window.gtag !== "function") return;

    var params = {
      form_id: "contact",
      page_path: window.location.pathname,
      page_title: document.title,
      language: document.documentElement.lang || ""
    };

    if (extra && typeof extra === "object") {
      Object.keys(extra).forEach(function (key) {
        params[key] = extra[key];
      });
    }

    window.gtag("event", "contact_form_submit", params);
  };

  function bindCtaTracking() {
    document.addEventListener(
      "click",
      function (e) {
        var el = e.target.closest("[data-cta]");
        if (!el) return;
        trackCtaClick(el);
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindCtaTracking);
  } else {
    bindCtaTracking();
  }
})();
