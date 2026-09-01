<script>
/* Persistent dark mode with system preference fallback */
(function () {
  const storageKey = "theme";
  const root = document.documentElement;
  const stored = localStorage.getItem(storageKey);
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const enable = (isDark) => root.classList.toggle("dark", isDark);

  enable(stored ? stored === "dark" : systemDark);

  // Expose a global toggle the nav can use
  window.toggleTheme = function toggleTheme() {
    const isDark = !root.classList.contains("dark");
    enable(isDark);
    localStorage.setItem(storageKey, isDark ? "dark" : "light");
    // move knob on the switch
    const knob = document.querySelector("#theme-toggle");
    if (knob) knob.classList.toggle("dark", isDark);
  };
})();
</script>
