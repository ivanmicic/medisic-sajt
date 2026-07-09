/**
 * Contact form validation + success state.
 * Expects #contact-form with .form-field / [aria-describedby] errors.
 */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var success = document.getElementById("form-success");
  var fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    phone: form.querySelector("#phone"),
    topic: form.querySelector("#topic"),
    message: form.querySelector("#message"),
    consent: form.querySelector("#consent")
  };

  function errorEl(field) {
    return document.getElementById(field.id + "-error");
  }

  function setError(field, message) {
    var err = errorEl(field);
    if (!err) return;
    err.textContent = message || "";
    field.setAttribute("aria-invalid", message ? "true" : "false");
    field.classList.toggle("is-invalid", Boolean(message));
  }

  function clearErrors() {
    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      if (field) setError(field, "");
    });
  }

  function requiredMsg(field) {
    return field.getAttribute("data-required") || "This field is required.";
  }

  function emailMsg(field) {
    return field.getAttribute("data-invalid-email") || "Enter a valid email address.";
  }

  function validate() {
    var ok = true;
    clearErrors();

    if (!fields.name.value.trim()) {
      setError(fields.name, requiredMsg(fields.name));
      ok = false;
    }

    var emailVal = fields.email.value.trim();
    if (!emailVal) {
      setError(fields.email, requiredMsg(fields.email));
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setError(fields.email, emailMsg(fields.email));
      ok = false;
    }

    if (fields.topic && !fields.topic.value) {
      setError(fields.topic, requiredMsg(fields.topic));
      ok = false;
    }

    if (!fields.message.value.trim()) {
      setError(fields.message, requiredMsg(fields.message));
      ok = false;
    }

    if (fields.consent && !fields.consent.checked) {
      setError(fields.consent, requiredMsg(fields.consent));
      ok = false;
    }

    return ok;
  }

  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    if (!field) return;
    var evt = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "blur";
    field.addEventListener(evt, function () {
      if (field.classList.contains("is-invalid")) validate();
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstInvalid = form.querySelector("[aria-invalid='true']");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    /* Front-end only for now — wire to backend / form service later */
    form.hidden = true;
    if (success) {
      success.hidden = false;
      success.focus();
    }

    var topic = fields.topic ? fields.topic.value : "";
    if (typeof window.trackContactFormSubmit === "function") {
      window.trackContactFormSubmit({ form_topic: topic });
    } else if (typeof gtag === "function") {
      gtag("event", "contact_form_submit", {
        form_id: "contact",
        form_topic: topic,
        page_path: location.pathname,
        language: document.documentElement.lang
      });
    }
  });
})();
