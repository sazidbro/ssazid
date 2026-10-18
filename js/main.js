/* Builds the pages from js/data.js. You normally do not need to edit this file. */
(function () {
  'use strict';

  var S = SITE;
  var page = document.body.getAttribute('data-page');

  // Makes any text safe to put into the page.
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- Icons (one colour, they follow the text colour) ---------------- */
  var ICON_ATTRS = 'width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
  var STROKE = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    facebook: '<svg ' + ICON_ATTRS + '><path fill="currentColor" d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/></svg>',
    instagram: '<svg ' + ICON_ATTRS + ' ' + STROKE + '><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"/></svg>',
    linkedin: '<svg ' + ICON_ATTRS + '><rect x="3" y="9" width="4" height="11" fill="currentColor"/><circle cx="5" cy="5" r="2.2" fill="currentColor"/><path fill="currentColor" d="M10 9h4v1.5c.6-1 1.8-1.7 3.4-1.7 3 0 3.6 2 3.6 4.6V20h-4v-6c0-1.4-.1-2.6-1.7-2.6S14 12.6 14 14v6h-4z"/></svg>',
    github: '<svg ' + ICON_ATTRS + '><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    email: '<svg ' + ICON_ATTRS + ' ' + STROKE + '><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6.5L20.5 7"/></svg>',
    website: '<svg ' + ICON_ATTRS + ' ' + STROKE + '><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>',
  };

  /* ---------------- Header ---------------- */
  var NAV = [
    ['home', 'index.html', 'Home'],
    ['education', 'education.html', 'Education'],
    ['skills', 'skills.html', 'Skills'],
    ['work', 'work.html', 'Work'],
    ['contact', 'contact.html', 'Contact'],
  ];

  function renderHeader() {
    var items = NAV.map(function (n) {
      var current = n[0] === page ? ' aria-current="page"' : '';
      return '<li><a href="' + n[1] + '"' + current + '>' + n[2] + '</a></li>';
    }).join('');

    document.getElementById('site-header').innerHTML =
      '<header class="site-header"><div class="container header-inner">' +
      '<a href="index.html" class="brand">[ ' + esc(S.profile.name) + ' ]</a>' +
      '<button type="button" class="menu-button" id="menu-button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav id="site-nav" class="nav" aria-label="Main"><ul>' + items +
      '<li><button type="button" class="theme-button" id="theme-button"></button></li>' +
      '</ul></nav></div></header>';

    // Mobile menu
    var menuButton = document.getElementById('menu-button');
    var nav = document.getElementById('site-nav');
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.textContent = open ? 'Close' : 'Menu';
    });

    // Dark / light button
    var themeButton = document.getElementById('theme-button');
    function currentTheme() {
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }
    function labelTheme() {
      var dark = currentTheme() === 'dark';
      themeButton.textContent = dark ? 'Light' : 'Dark';
      themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    themeButton.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      labelTheme();
    });
    labelTheme();
  }

  /* ---------------- Footer ---------------- */
  function renderFooter() {
    document.getElementById('site-footer').innerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<p>© ' + new Date().getFullYear() + ' ' + esc(S.profile.name) + '<br>Personal Portfolio</p>' +
      (S.footerNote ? '<p class="muted">' + esc(S.footerNote) + '</p>' : '') +
      '</div></footer>';
  }

  /* ---------------- Home ---------------- */
  function listBlock(label, items) {
    var clean = (items || []).filter(Boolean);
    if (!clean.length) return '';
    return '<section class="intro-block"><h2 class="label">' + esc(label) + '</h2><ul class="plain-list">' +
      clean.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></section>';
  }

  // The intro is typed only once per visit, so moving between pages does not replay it.
  function shouldAnimate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try { if (sessionStorage.getItem('introTyped')) return false; } catch (e) {}
    return true;
  }

  function renderHome(main) {
    var p = S.profile;
    var greeting = "Hello, I'm " + p.name + '.';
    var tagline = p.tagline;

    var facts = [
      ['Institution', p.institution],
      ['Discipline', p.department],
      ['Year', p.year],
      ['Location', p.location],
    ].filter(function (f) { return f[1]; });

    main.innerHTML =
      '<div class="home">' +
      '<figure class="portrait"><img src="' + esc(p.photo) + '" alt="' + esc(p.photoAlt) + '" width="400" height="500" decoding="async">' +
      (p.photoCaption ? '<figcaption class="muted">' + esc(p.photoCaption) + '</figcaption>' : '') + '</figure>' +
      '<div class="intro">' +
      // Full text stays in the page for screen readers and search engines.
      // The animated copy is aria-hidden so nothing is read twice.
      '<h1 class="type-slot"><span class="sr-only">' + esc(greeting) + '</span>' +
      '<span class="type-ghost" aria-hidden="true">' + esc(greeting) + '</span>' +
      '<span class="type-live" aria-hidden="true" id="type-1"></span></h1>' +
      '<p class="tagline type-slot"><span class="sr-only">' + esc(tagline) + '</span>' +
      '<span class="type-ghost" aria-hidden="true">' + esc(tagline) + '</span>' +
      '<span class="type-live" aria-hidden="true" id="type-2"></span></p>' +
      '<hr>' +
      p.bio.map(function (b) { return '<p>' + esc(b) + '</p>'; }).join('') +
      '<dl class="facts">' + facts.map(function (f) {
        return '<div><dt class="label">' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>';
      }).join('') + '</dl>' +
      listBlock('Academic interests', p.academicInterests) +
      listBlock('Technical interests', p.technicalInterests) +
      listBlock('Future goals', p.futureGoals) +
      '<p class="home-links"><a href="education.html">[View my education]</a>' +
      '<a href="skills.html">[Explore my skills]</a><a href="work.html">[See my work]</a></p>' +
      '</div></div>';

    var el1 = document.getElementById('type-1');
    var el2 = document.getElementById('type-2');
    var cursor = '<span class="cursor"></span>';

    if (!shouldAnimate()) {
      el1.textContent = greeting;
      el2.textContent = tagline;
      return;
    }

    var full = greeting + '\n' + tagline;
    var i = 0;

    function draw() {
      if (i <= greeting.length) {
        el1.innerHTML = esc(greeting.slice(0, i)) + cursor;
        el2.innerHTML = '';
      } else {
        el1.textContent = greeting;
        el2.innerHTML = esc(tagline.slice(0, i - greeting.length - 1)) + cursor;
      }
    }

    function tick() {
      i += 1;
      draw();
      if (i >= full.length) {
        try { sessionStorage.setItem('introTyped', '1'); } catch (e) {}
        return;
      }
      var ch = full.charAt(i - 1);
      // A little irregular, like real keystrokes, with longer pauses after punctuation.
      var delay = 30 + Math.random() * 40;
      if (ch === '.' || ch === ',') delay += 200;
      if (ch === '\n') delay += 400;
      setTimeout(tick, delay);
    }

    draw();
    setTimeout(tick, 400);
  }

  /* ---------------- Education ---------------- */
  function renderEducation(main) {
    var list = S.education.slice().reverse(); // newest first
    var body = list.length
      ? '<ol class="entry-list">' + list.map(function (e) {
          var dates = [e.start, e.end].filter(Boolean).join(' – ');
          return '<li class="entry education-entry">' +
            (e.logo ? '<img class="logo" src="' + esc(e.logo) + '" alt="' + esc(e.institution) + ' logo" width="56" height="56" loading="lazy" decoding="async">' : '') +
            '<div><h2 class="entry-title">' + esc(e.institution) + '</h2>' +
            (e.level ? '<p class="entry-line">' + esc(e.level) + '</p>' : '') +
            (e.subject ? '<p class="entry-line muted">' + esc(e.subject) + '</p>' : '') +
            (dates ? '<p class="entry-dates muted">' + esc(dates) + '</p>' : '') +
            (e.description ? '<p class="entry-desc">' + esc(e.description) + '</p>' : '') +
            '</div></li>';
        }).join('') + '</ol>'
      : '<p class="muted">Education details will appear here.</p>';

    main.innerHTML = '<section><p class="label">Education</p><h1>Where I have studied</h1><hr>' + body + '</section>';
  }

  /* ---------------- Skills ---------------- */
  function renderSkills(main) {
    var groups = S.skillGroups.filter(function (g) { return g.skills && g.skills.length; }).map(function (g) {
      return '<section class="skill-group"><h2 class="label">' + esc(g.title) + '</h2><ul class="skill-list">' +
        g.skills.map(function (s) {
          return '<li><span>' + esc(s.name) + '</span><span class="skill-dots" aria-hidden="true"></span><span class="muted">' + esc(s.level) + '</span></li>';
        }).join('') + '</ul></section>';
    }).join('');

    var learning = (S.currentlyLearning || []).filter(Boolean);
    var learningHtml = learning.length
      ? '<section class="skill-group"><h2 class="label">Currently learning</h2><ul class="plain-list">' +
        learning.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul></section>'
      : '';

    main.innerHTML = '<section><p class="label">Skills</p><h1>What I work with</h1><hr>' + groups + learningHtml + '</section>';
  }

  /* ---------------- Work & Experience ---------------- */
  var CATEGORY_ORDER = ['Work Experience', 'Projects', 'Internships', 'Volunteering', 'Freelance Work', 'Achievements', 'Certifications'];

  function renderWork(main) {
    var html = CATEGORY_ORDER.map(function (cat) {
      var items = S.experience.filter(function (e) { return e.category === cat; });
      if (!items.length) return ''; // empty categories stay hidden
      return '<section class="work-group"><h2 class="label">' + esc(cat) + '</h2><ol class="entry-list">' +
        items.map(function (e) {
          var dates = [e.start, e.end].filter(Boolean).join(' – ');
          var tech = (e.tech || []).filter(Boolean);
          var links = '';
          if (e.link) links += '<a href="' + esc(e.link) + '" target="_blank" rel="noopener noreferrer">[View Project]</a>';
          if (e.repo) links += '<a href="' + esc(e.repo) + '" target="_blank" rel="noopener noreferrer">[Source Code]</a>';
          return '<li class="entry experience-entry"><h3 class="entry-title">' + esc(e.name) + '</h3>' +
            (e.role ? '<p class="entry-line">' + esc(e.role) + '</p>' : '') +
            (dates ? '<p class="entry-dates muted">' + esc(dates) + '</p>' : '') +
            (e.image ? '<img class="entry-image" src="' + esc(e.image) + '" alt="Screenshot of ' + esc(e.name) + '" loading="lazy" decoding="async">' : '') +
            (e.description ? '<p class="entry-desc">' + esc(e.description) + '</p>' : '') +
            (tech.length ? '<p class="muted entry-tech">Used: ' + esc(tech.join(', ')) + '</p>' : '') +
            (links ? '<p class="entry-links">' + links + '</p>' : '') +
            '</li>';
        }).join('') + '</ol></section>';
    }).join('');

    main.innerHTML = '<section><p class="label">Work &amp; Experience</p><h1>What I have made and done</h1><hr>' +
      (html || '<p class="muted">Projects and experience will appear here.</p>') + '</section>';
  }

  /* ---------------- Contact ---------------- */
  var ACCOUNTS = [
    ['facebook', 'Facebook'], ['instagram', 'Instagram'], ['linkedin', 'LinkedIn'],
    ['github', 'GitHub'], ['email', 'Email'], ['website', 'Website'],
  ];

  function renderContact(main) {
    var visible = ACCOUNTS.filter(function (a) { return S.social[a[0]]; });
    var body = visible.length
      ? '<ul class="social-list">' + visible.map(function (a) {
          var key = a[0], label = a[1], value = S.social[key];
          var isEmail = key === 'email';
          var attrs = isEmail
            ? 'href="mailto:' + esc(value) + '" aria-label="Email ' + esc(value) + '"'
            : 'href="' + esc(value) + '" target="_blank" rel="noopener noreferrer" aria-label="' + label + ' (opens in a new tab)"';
          return '<li><a ' + attrs + '>' + ICONS[key] + '<span>' + label + '</span></a></li>';
        }).join('') + '</ul>'
      : '<p class="muted">No links yet. Add your profile links in <code>js/data.js</code> and they will appear here.</p>';

    main.innerHTML = '<section><p class="label">Contact</p><h1>Connect with me</h1><hr>' + body + '</section>';
  }

  /* ---------------- Start ---------------- */
  var main = document.getElementById('main');
  renderHeader();
  renderFooter();

  var renderers = { home: renderHome, education: renderEducation, skills: renderSkills, work: renderWork, contact: renderContact };
  if (renderers[page]) renderers[page](main);
})();
