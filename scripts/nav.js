<script>
/* Inject a shared nav and set active link */
(function () {
  const here = location.pathname.replace(/\/index\.html$/, "/");
  const base = "/";
  const links = [
    { href: base, label: "Home" },
    { href: base + "preprints.html", label: "Preprints" },
    { href: base + "publications.html", label: "Publications" },
    { href: base + "undergrad.html", label: "Undergraduate" },
    { href: base + "cv.html", label: "CV" },
    { href: base + "about.html", label: "About" }
  ];

  const nav = `
    <header class="py-5">
      <div class="max-w-screen-lg mx-auto px-4 flex items-center justify-between">
        <a href="${base}" class="font-semibold text-lg">Andrew Lott</a>
        <nav class="flex gap-4 items-center">
          ${links.map(l => `
            <a
              href="${l.href}"
              class="px-3 py-1 rounded-lg transition
                     text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                     ${ (here === l.href || (here === "/" && l.href === base)) ? "ring-1 ring-gray-300 dark:ring-gray-700" : "" }">
              ${l.label}
            </a>
          `).join("")}
          <button id="theme-toggle"
                  class="toggle-switch ${document.documentElement.classList.contains('dark') ? "dark" : ""}"
                  title="Toggle dark mode"
                  aria-label="Toggle dark mode"></button>
        </nav>
      </div>
    </header>
  `;

  const mount = document.getElementById("site-nav");
  if (mount) mount.innerHTML = nav;

  // wire theme toggle
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.addEventListener("click", () => window.toggleTheme && window.toggleTheme());
})();
</script>
