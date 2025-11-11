// Theme toggle for high contrast mode
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const highContrast = body.classList.toggle("high-contrast");
  themeToggle.setAttribute("aria-pressed", highContrast);
  localStorage.setItem("theme", highContrast ? "high-contrast" : "normal");
});

// Load saved theme
if (localStorage.getItem("theme") === "high-contrast") {
  body.classList.add("high-contrast");
  themeToggle.setAttribute("aria-pressed", "true");
}
