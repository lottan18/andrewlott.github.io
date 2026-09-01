/* Inject the shared navigation and theme toggle */
(function () {
  const here = location.pathname.replace(/\/index\.html$/, "/");
  const links = [
    { href: "/", label: "Home", active: ["/"] },
    { href: "/research.html", label: "Research", active: ["/research.html"] },
    { href: "/teaching.html", label: "Teaching", active: ["/teaching.html"] },
    { href: "/mentorship.html", label: "Mentorship", active: ["/mentorship.html"] },
    { href: "/talks.html", label: "Talks", active: ["/talks.html"] },
    {
      href: "/undergrad.html",
      label: "Undergraduate",
      active: ["/undergrad.html", "/undergradpublications.html"]
    },
    { href: "/cv.html", label: "CV", active: ["/cv.html"] },
    { href: "/about.html", label: "About", active: ["/about.html"] }
  ];

  const nav = `
    <header class="py-5">
      <div class="max-w-screen-lg mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        <a href="/" class="site-brand font-semibold text-lg">Andrew Lott</a>
        <nav class="flex flex-wrap items-center justify-end gap-1" aria-label="Primary navigation">
          ${links.map(function (link) {
            const active = link.active.includes(here);
            return `
              <a
                href="${link.href}"
                class="site-nav-link ${active ? "is-active" : ""} px-3 py-1 rounded-lg text-sm transition"
                ${active ? 'aria-current="page"' : ""}>
                ${link.label}
              </a>
            `;
          }).join("")}
          <button
            id="theme-toggle"
            class="toggle-switch ${document.documentElement.classList.contains("dark") ? "dark" : ""}"
            type="button"
            aria-pressed="${document.documentElement.classList.contains("dark")}"
            aria-label="${document.documentElement.classList.contains("dark") ? "Switch to light mode" : "Switch to dark mode"}"
            title="${document.documentElement.classList.contains("dark") ? "Switch to light mode" : "Switch to dark mode"}">
          </button>
        </nav>
      </div>
    </header>
  `;

  const mount = document.getElementById("site-nav");
  if (mount) mount.innerHTML = nav;

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (window.toggleTheme) window.toggleTheme();
    });
  }
})();
