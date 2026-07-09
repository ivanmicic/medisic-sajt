/**
 * Lightweight gallery lightbox — no dependencies.
 * Activates only when [data-gallery] is present.
 */
(function () {
  "use strict";

  var root = document.querySelector("[data-gallery]");
  if (!root) return;

  var items = Array.prototype.slice.call(
    root.querySelectorAll("a[data-gallery-item]")
  );
  if (!items.length) return;

  var index = 0;
  var dialog = null;
  var imgEl = null;
  var captionEl = null;
  var liveEl = null;

  function build() {
    dialog = document.createElement("div");
    dialog.className = "lightbox";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", root.getAttribute("data-lightbox-label") || "Gallery");
    dialog.hidden = true;
    dialog.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="' +
      (root.getAttribute("data-lightbox-close") || "Close") +
      '">&times;</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="' +
      (root.getAttribute("data-lightbox-prev") || "Previous") +
      '">&#8249;</button>' +
      '<figure class="lightbox__figure">' +
      '<img class="lightbox__img" alt="" width="1200" height="1200" decoding="async">' +
      '<figcaption class="lightbox__caption"></figcaption>' +
      "</figure>" +
      '<button type="button" class="lightbox__nav lightbox__nav--next" aria-label="' +
      (root.getAttribute("data-lightbox-next") || "Next") +
      '">&#8250;</button>' +
      '<p class="visually-hidden" aria-live="polite"></p>';

    document.body.appendChild(dialog);
    imgEl = dialog.querySelector(".lightbox__img");
    captionEl = dialog.querySelector(".lightbox__caption");
    liveEl = dialog.querySelector("[aria-live]");

    dialog.querySelector(".lightbox__close").addEventListener("click", close);
    dialog.querySelector(".lightbox__nav--prev").addEventListener("click", function () {
      show(index - 1);
    });
    dialog.querySelector(".lightbox__nav--next").addEventListener("click", function () {
      show(index + 1);
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) close();
    });
  }

  function show(i) {
    if (!dialog) build();
    index = (i + items.length) % items.length;
    var link = items[index];
    var thumb = link.querySelector("img");
    imgEl.src = link.getAttribute("href");
    imgEl.alt = thumb ? thumb.alt : "";
    captionEl.textContent = link.getAttribute("data-caption") || imgEl.alt;
    liveEl.textContent = index + 1 + " / " + items.length;
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    dialog.querySelector(".lightbox__close").focus();
  }

  function close() {
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    document.body.style.overflow = "";
    imgEl.removeAttribute("src");
  }

  items.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      show(i);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (!dialog || dialog.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
