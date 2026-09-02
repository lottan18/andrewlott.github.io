(() => {
  const mount = document.getElementById('site-nav');
  if (!mount) return;

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = [
    { label: 'Research', href: '/research.html', page: 'research.html' },
    { label: 'Teaching', href: '/teaching.html', page: 'teaching.html' },
    { label: 'Mentorship', href: '/mentorship.html', page: 'mentorship.html' },
    { label: 'Talks', href: '/talks.html', page: 'talks.html' }
  ];

  const homeCurrent = currentPage === 'index.html';
  const navLinks = links.map(({ label, href, page }) => {
    const current = currentPage === page ? ' aria-current="page"' : '';
    return `<a class="site-nav-link" href="${href}"${current}>${label}</a>`;
  }).join('');

  mount.innerHTML = `
    <header class="site-header">
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="site-brand" href="/" ${homeCurrent ? 'aria-current="page"' : ''}>Andrew Lott</a>
        <div class="site-nav-links">${navLinks}</div>
      </nav>
    </header>
  `;
})();
