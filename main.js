const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setMenu = (open) => {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);

  const icon = menuButton.querySelector("svg");
  if (icon) {
    icon.outerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    window.lucide?.createIcons();
  }
};

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const revealElements = document.querySelectorAll(".reveal");
if (reducedMotion) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  requestAnimationFrame(() => {
    revealElements.forEach((element) => element.classList.add("visible"));
  });
}

document.querySelectorAll(".service").forEach((service) => {
  service.addEventListener("mouseenter", () => {
    document.querySelector(".service.active")?.classList.remove("active");
    service.classList.add("active");
  });

  service.addEventListener("focus", () => {
    document.querySelector(".service.active")?.classList.remove("active");
    service.classList.add("active");
  });
});

const consultationLink = document.querySelector("[data-consultation-link]");
const mailFeedback = document.querySelector("[data-mail-feedback]");

consultationLink?.addEventListener("click", (event) => {
  event.preventDefault();

  const email = consultationLink.dataset.contactEmail;
  mailFeedback.textContent = `Opening your email app. If nothing happens, email ${email}.`;
  navigator.clipboard?.writeText(email).then(() => {
    mailFeedback.textContent = `Opening your email app. ${email} has also been copied.`;
  }).catch(() => {});
  window.location.href = consultationLink.href;
});

window.addEventListener("load", () => window.lucide?.createIcons());