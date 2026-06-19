(function () {
  var IG_SVG = '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
  var FB_SVG = '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';

  var NAV_HTML =
    '<nav class="navbar" id="navbar">' +
      '<div class="nav-container">' +
        '<a href="/" class="nav-logo">SPUNRIS<span class="logo-glow">3</span></a>' +
        '<ul class="nav-menu" id="navMenu">' +
          '<li class="nav-item"><a href="/" class="nav-link">HOME</a></li>' +
          '<li class="nav-item"><a href="/#event" class="nav-link" style="color:var(--neon-orange,#ff6600)">🔥 EVENT</a></li>' +
          '<li class="nav-item nav-dropdown">' +
            '<button class="nav-link dropdown-btn">PARTY HUB ▾</button>' +
            '<div class="dropdown-menu">' +
              '<div class="dropdown-label">NODA</div>' +
              '<a href="/noda-underground-raves.html">Underground Raves In NoDa</a>' +
              '<a href="/noda-afterparties.html">Afterparties In NoDa</a>' +
              '<a href="/noda-warehouse-parties.html">Warehouse Parties In NoDa</a>' +
              '<a href="/noda-get-togethers.html">Get Togethers In NoDa</a>' +
              '<a href="/noda-unannounced-parties.html">Unannounced Parties In NoDa</a>' +
              '<a href="/noda-underground-edm-shows.html">Underground EDM Shows In NoDa</a>' +
              '<hr class="dropdown-divider">' +
              '<div class="dropdown-label">NEIGHBORHOODS</div>' +
              '<a href="/villa-heights-underground.html">Villa Heights Underground</a>' +
              '<a href="/sugar-creek-underground.html">Sugar Creek Underground</a>' +
              '<a href="/plaza-midwood-underground.html">Plaza Midwood Underground</a>' +
            '</div>' +
          '</li>' +
          '<li class="nav-item"><a href="/#about" class="nav-link">24/7 CHAT</a></li>' +
          '<li class="nav-item"><a href="/#contact" class="nav-link">CONTACT</a></li>' +
        '</ul>' +
        '<div class="nav-right">' +
          '<div class="nav-socials">' +
            '<a href="https://www.instagram.com/spunris3?igsh=bjZqd2pqYTQ0OGNm" aria-label="Instagram">' + IG_SVG + '</a>' +
            '<a href="https://www.facebook.com/rashante.ford" aria-label="Facebook">' + FB_SVG + '</a>' +
          '</div>' +
          '<a href="https://rankops.net" class="nav-powered" target="_blank" rel="noopener">Powered by Rankops.net</a>' +
        '</div>' +
        '<div class="nav-toggle" id="navToggle"><span></span><span></span><span></span></div>' +
      '</div>' +
    '</nav>';

  var FOOTER_HTML =
    '<footer class="footer">' +
      '<div class="container">' +
        '<div class="footer-content">' +
          '<div class="footer-brand">' +
            '<h3 class="footer-logo">SPUNRIS<span class="logo-glow">3</span></h3>' +
            '<p class="footer-tagline">Charlotte\'s Underground EDM Movement</p>' +
            '<div class="footer-social">' +
              '<a href="https://www.instagram.com/spunris3?igsh=bjZqd2pqYTQ0OGNm" target="_blank" rel="noopener" aria-label="Instagram">' + IG_SVG + '</a>' +
              '<a href="https://www.facebook.com/rashante.ford" target="_blank" rel="noopener" aria-label="Facebook">' + FB_SVG + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-links">' +
            '<div class="footer-column">' +
              '<h4>Section Links</h4>' +
              '<ul>' +
                '<li><a href="/">Home</a></li>' +
                '<li><a href="/#event">Upcoming Event</a></li>' +
                '<li><a href="/#about">24/7 Chat</a></li>' +
                '<li><a href="/#gallery">Gallery</a></li>' +
                '<li><a href="/#faq">FAQ</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-column">' +
              '<h4>Get Involved</h4>' +
              '<ul>' +
                '<li><a href="/#contact">Contact Us</a></li>' +
                '<li><a href="/#contact">Book a DJ</a></li>' +
                '<li><a href="/#contact">Partnership</a></li>' +
                '<li><a href="/#contact">Suggestions</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="footer-column">' +
              '<h4>Our Partners</h4>' +
              '<ul>' +
                '<li><a href="https://website48.pages.dev" target="_blank" rel="noopener">SEO/GEO WEB SERVICES</a></li>' +
                '<li><a href="https://m3ffmusic.pages.dev" target="_blank" rel="noopener">D3FFM3FFR3CORDZ</a></li>' +
                '<li><a href="https://webfix24.pages.dev" target="_blank" rel="noopener">WEBFIX24</a></li>' +
                '<li><a href="https://gptpromptvault.pages.dev" target="_blank" rel="noopener">GPT-PROMPT-VAULT</a></li>' +
                '<li><a href="https://mbkid.pages.dev" target="_blank" rel="noopener">MATCHBOOK KID</a></li>' +
                '<li><a href="https://tbuilds.pages.dev" target="_blank" rel="noopener">PARTNER BUILDS</a></li>' +
                '<li><a href="https://thethinkery.pages.dev" target="_blank" rel="noopener">THE THINKERY</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<p>&copy; 2026 Spunris3. All Rights Reserved.</p>' +
          '<p class="footer-credit">Built with 🧡 in Charlotte | <a href="mailto:amir@spunris3.com">EMAIL US HERE!</a></p>' +
          '<p class="footer-powered"><a href="https://rankops.net" target="_blank" rel="noopener">Powered by Rankops.net</a></p>' +
        '</div>' +
      '</div>' +
    '</footer>';

  // Inject nav placeholder
  var navSlot = document.getElementById('site-nav');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  // Inject footer placeholder (sub-pages only)
  var footerSlot = document.getElementById('site-footer');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Mark active dropdown link based on current path
  var path = window.location.pathname;
  document.querySelectorAll('.dropdown-menu a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  // Scroll → scrolled class
  window.addEventListener('scroll', function () {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Mobile hamburger toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // Close mobile menu when a non-dropdown nav link is clicked
  document.querySelectorAll('#navMenu .nav-link:not(.dropdown-btn)').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navToggle) navToggle.classList.remove('active');
      if (navMenu) navMenu.classList.remove('open');
    });
  });

  // Party Hub: click to open, click elsewhere to close
  document.querySelectorAll('.dropdown-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      btn.closest('.nav-dropdown').classList.toggle('open');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
      d.classList.remove('open');
    });
  });
}());
