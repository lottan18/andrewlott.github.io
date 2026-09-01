/* Persistent theme with a light first-visit default */
(function () {
  const storageKey = "theme";
  const root = document.documentElement;

  function syncToggle(isDark) {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.classList.toggle("dark", isDark);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  function enable(isDark) {
    root.classList.toggle("dark", isDark);
    syncToggle(isDark);
  }

  const stored = localStorage.getItem(storageKey);
  enable(stored === "dark");

  window.toggleTheme = function toggleTheme() {
    const isDark = !root.classList.contains("dark");
    enable(isDark);
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
  };

  window.addEventListener("storage", function (event) {
    if (event.key === storageKey) {
      enable(event.newValue === "dark");
    }
  });
})();
