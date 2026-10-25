const config = window.SITE_CONFIG || {};
const WHATSAPP_NUMBER = config.whatsappNumber || "919999999999";
const defaultMessage = "Hi, I found your website and would like to discuss a project. I need help with Development / QA Testing / Automation Testing.";

function whatsappUrl(context = "Project inquiry") {
  const message = context === "General inquiry" ? defaultMessage : `${defaultMessage}\n\nTopic: ${context}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(whatsappUrl(link.dataset.whatsapp), "_blank", "noopener,noreferrer");
  });
});

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("open")));

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const context = `${data.get("service")} — ${data.get("name")}`;
  window.open(whatsappUrl(context), "_blank", "noopener,noreferrer");
  form.querySelector(".success-message").classList.add("show");
  form.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
