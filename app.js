/* ============================================================
   Full Stack AI Roadmap — Application Logic
   ============================================================ */

(function() {
  'use strict';

  // --- Constants ---
  const STORAGE_KEY = 'ai-roadmap-completed';

  const SOURCE_LABELS = {
    'data-analyst': 'DA',
    'machine-learning': 'ML',
    'power-bi': 'PBI',
    'ai-data-scientist': 'DS',
    'data-engineer': 'DE',
    'ai-engineer': 'AIE'
  };

  const SOURCE_CLASSES = {
    'data-analyst': 'da',
    'machine-learning': 'ml',
    'power-bi': 'pbi',
    'ai-data-scientist': 'ds',
    'data-engineer': 'de',
    'ai-engineer': 'aie'
  };

  // --- State ---
  let completed = new Set();
  let allTopicIds = [];

  // --- DOM refs ---
  const contentEl = document.getElementById('roadmap-content');
  const navInner = document.querySelector('#phase-nav .nav-inner');
  const searchInput = document.getElementById('search-input');
  const searchCount = document.getElementById('search-count');
  const progressBar = document.getElementById('progress-bar');
  const statsCompleted = document.getElementById('stats-completed');
  const statsTotal = document.getElementById('stats-total');
  const resetBtn = document.getElementById('reset-btn');

  // --- Helpers ---

  function loadProgress() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const arr = JSON.parse(stored);
        completed = new Set(arr);
      }
    } catch (e) {
      completed = new Set();
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  }

  function createProgressRing(percent, size) {
    size = size || 44;
    const radius = (size - 6) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    const displayPercent = Math.round(percent);
    return '<svg class="progress-ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle class="progress-ring-bg" cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" />' +
      '<circle class="progress-ring-fill" cx="' + (size/2) + '" cy="' + (size/2) + '" r="' + radius + '" ' +
      'style="stroke-dasharray: ' + circumference + '; stroke-dashoffset: ' + offset + '" />' +
      '<text x="' + (size/2) + '" y="' + (size/2) + '" class="progress-ring-text">' + displayPercent + '%</text>' +
      '</svg>';
  }

  function getPhaseProgress(phase) {
    const total = phase.topics.length;
    if (total === 0) return { completed: 0, total: 0, percent: 0 };
    let done = 0;
    phase.topics.forEach(function(t) {
      if (completed.has(t.id)) done++;
    });
    return { completed: done, total: total, percent: (done / total) * 100 };
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Render ---

  function renderAll() {
    const data = window.ROADMAP_DATA;
    if (!data) return;

    // Collect all topic IDs
    allTopicIds = [];
    data.phases.forEach(function(phase) {
      phase.topics.forEach(function(topic) {
        allTopicIds.push(topic.id);
      });
    });

    // Render phases & checkpoints
    let html = '';
    data.phases.forEach(function(phase) {
      html += renderPhase(phase);
      // Find checkpoint for this phase
      const cp = data.checkpoints.find(function(c) { return c.afterPhase === phase.number; });
      if (cp) {
        html += renderCheckpoint(cp);
      }
    });
    contentEl.innerHTML = html;

    // Render nav
    renderNav(data.phases);

    // Update stats
    statsTotal.textContent = allTopicIds.length;

    // Update progress
    updateAllProgress();

    // Setup interactions
    setupEventListeners();
    setupIntersectionObserver();
    setupScrollSpy();
  }

  function renderPhase(phase) {
    const progress = getPhaseProgress(phase);
    let topicsHtml = '';
    phase.topics.forEach(function(topic) {
      topicsHtml += renderTopic(topic);
    });

    return '<section id="' + phase.id + '" class="phase-section" data-phase="' + phase.number + '">' +
      '<div class="phase-header">' +
        '<span class="phase-number">PHASE ' + phase.number + '</span>' +
        '<div class="phase-info">' +
          '<h2 class="phase-title">' + escapeHTML(phase.title) + '</h2>' +
          '<p class="phase-description">' + escapeHTML(phase.description) + '</p>' +
          '<p class="phase-progress-info" data-phase-progress="' + phase.number + '">' +
            progress.completed + ' of ' + progress.total + ' completed' +
          '</p>' +
        '</div>' +
        '<div class="phase-ring-container" data-phase-ring="' + phase.number + '">' +
          createProgressRing(progress.percent) +
        '</div>' +
      '</div>' +
      '<div class="phase-topics">' + topicsHtml + '</div>' +
    '</section>';
  }

  function renderTopic(topic) {
    const isCompleted = completed.has(topic.id);
    const classes = 'topic-card' + (isCompleted ? ' completed' : '');

    let sourceBadges = '';
    topic.sources.forEach(function(src) {
      const label = SOURCE_LABELS[src] || src;
      const cls = SOURCE_CLASSES[src] || '';
      sourceBadges += '<span class="source-badge ' + cls + '">' + label + '</span>';
    });

    let resourcesHtml = '';
    topic.resources.forEach(function(res) {
      resourcesHtml += '<div class="resource-item">' +
        '<span class="resource-badge ' + res.type + '">' + res.type + '</span>' +
        '<a href="' + res.url + '" target="_blank" rel="noopener noreferrer" class="resource-link" title="' + escapeHTML(res.title) + '">' +
          escapeHTML(res.title) +
        '</a>' +
        '<span class="resource-platform">' + escapeHTML(res.platform) + '</span>' +
      '</div>';
    });

    return '<div class="' + classes + '" data-topic-id="' + topic.id + '">' +
      '<div class="topic-header">' +
        '<input type="checkbox" class="topic-checkbox" ' + (isCompleted ? 'checked' : '') + ' data-id="' + topic.id + '" />' +
        '<span class="topic-title">' + escapeHTML(topic.title) + '</span>' +
        '<div class="source-badges">' + sourceBadges + '</div>' +
        '<span class="topic-chevron">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>' +
        '</span>' +
      '</div>' +
      '<div class="topic-body">' +
        '<p class="topic-description">' + escapeHTML(topic.description) + '</p>' +
        '<div class="resources-label">Free Resources</div>' +
        '<div class="resource-list">' + resourcesHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  function renderCheckpoint(cp) {
    let projectsHtml = '';
    cp.projects.forEach(function(proj, idx) {
      projectsHtml += '<div class="project-item">' +
        '<span class="project-number">' + (idx + 1) + '</span>' +
        '<a href="' + proj.url + '" target="_blank" rel="noopener noreferrer" class="project-link">' +
          escapeHTML(proj.title) +
        '</a>' +
        '<span class="project-type-badge">' + proj.type + '</span>' +
      '</div>';
    });

    return '<div class="checkpoint-card" data-checkpoint="' + cp.id + '">' +
      '<span class="checkpoint-badge">Checkpoint</span>' +
      '<h3 class="checkpoint-title">' + escapeHTML(cp.title) + '</h3>' +
      '<p class="checkpoint-description">' + escapeHTML(cp.description) + '</p>' +
      '<div class="checkpoint-projects-label">Suggested Projects & Tutorials</div>' +
      '<div class="project-list">' + projectsHtml + '</div>' +
    '</div>';
  }

  function renderNav(phases) {
    let html = '';
    phases.forEach(function(phase) {
      const progress = getPhaseProgress(phase);
      let dotClass = 'nav-dot';
      if (progress.percent >= 100) dotClass += ' complete';
      else if (progress.percent > 0) dotClass += ' partial';

      html += '<a href="#' + phase.id + '" class="nav-item" data-nav-phase="' + phase.number + '">' +
        '<span class="nav-number">' + phase.number + '</span>' +
        '<span class="nav-label">' + escapeHTML(phase.title) + '</span>' +
        '<span class="' + dotClass + '"></span>' +
      '</a>';
    });
    navInner.innerHTML = html;
  }

  // --- Progress Updates ---

  function updateAllProgress() {
    const data = window.ROADMAP_DATA;
    if (!data) return;

    // Global progress
    const totalCompleted = allTopicIds.filter(function(id) { return completed.has(id); }).length;
    statsCompleted.textContent = totalCompleted;
    const globalPercent = allTopicIds.length > 0 ? (totalCompleted / allTopicIds.length) * 100 : 0;
    progressBar.style.width = globalPercent + '%';

    // Per-phase progress
    data.phases.forEach(function(phase) {
      const progress = getPhaseProgress(phase);

      // Update ring
      const ringContainer = document.querySelector('[data-phase-ring="' + phase.number + '"]');
      if (ringContainer) {
        ringContainer.innerHTML = createProgressRing(progress.percent);
      }

      // Update text
      const progressText = document.querySelector('[data-phase-progress="' + phase.number + '"]');
      if (progressText) {
        progressText.textContent = progress.completed + ' of ' + progress.total + ' completed';
      }

      // Update nav dot
      const navDot = document.querySelector('[data-nav-phase="' + phase.number + '"] .nav-dot');
      if (navDot) {
        navDot.className = 'nav-dot';
        if (progress.percent >= 100) navDot.classList.add('complete');
        else if (progress.percent > 0) navDot.classList.add('partial');
      }
    });
  }

  // --- Event Listeners ---

  function setupEventListeners() {
    // Checkbox toggle
    contentEl.addEventListener('change', function(e) {
      if (e.target.classList.contains('topic-checkbox')) {
        const id = e.target.getAttribute('data-id');
        const card = e.target.closest('.topic-card');
        if (e.target.checked) {
          completed.add(id);
          card.classList.add('completed');
        } else {
          completed.delete(id);
          card.classList.remove('completed');
        }
        saveProgress();
        updateAllProgress();
      }
    });

    // Expand/collapse on header click (not checkbox)
    contentEl.addEventListener('click', function(e) {
      // Don't toggle if clicking checkbox or link
      if (e.target.classList.contains('topic-checkbox') ||
          e.target.tagName === 'A' ||
          e.target.closest('a')) {
        return;
      }

      const header = e.target.closest('.topic-header');
      if (!header) return;

      const card = header.closest('.topic-card');
      if (!card) return;

      // Accordion: close others
      const currentlyExpanded = contentEl.querySelector('.topic-card.expanded');
      if (currentlyExpanded && currentlyExpanded !== card) {
        currentlyExpanded.classList.remove('expanded');
      }

      card.classList.toggle('expanded');
    });

    // Search
    searchInput.addEventListener('input', debounce(handleSearch, 200));

    // Reset
    resetBtn.addEventListener('click', function() {
      if (confirm('Reset all progress? This cannot be undone.')) {
        completed.clear();
        saveProgress();

        // Uncheck all checkboxes
        document.querySelectorAll('.topic-checkbox').forEach(function(cb) {
          cb.checked = false;
        });
        document.querySelectorAll('.topic-card.completed').forEach(function(card) {
          card.classList.remove('completed');
        });

        updateAllProgress();
      }
    });

    // Nav click
    navInner.addEventListener('click', function(e) {
      e.preventDefault();
      const navItem = e.target.closest('.nav-item');
      if (!navItem) return;
      const href = navItem.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Search ---

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const data = window.ROADMAP_DATA;
    if (!data) return;

    if (!query) {
      // Show everything
      document.querySelectorAll('.topic-card').forEach(function(c) { c.classList.remove('hidden'); });
      document.querySelectorAll('.phase-section').forEach(function(s) { s.classList.remove('hidden'); });
      document.querySelectorAll('.checkpoint-card').forEach(function(c) { c.classList.remove('hidden'); });
      searchCount.textContent = '';
      return;
    }

    let matchCount = 0;

    data.phases.forEach(function(phase) {
      let phaseHasVisible = false;
      const section = document.getElementById(phase.id);

      phase.topics.forEach(function(topic) {
        const card = document.querySelector('[data-topic-id="' + topic.id + '"]');
        if (!card) return;

        // Search in title, description, resource titles, platforms
        const searchableText = [
          topic.title,
          topic.description,
          topic.resources.map(function(r) { return r.title + ' ' + r.platform; }).join(' ')
        ].join(' ').toLowerCase();

        if (searchableText.indexOf(query) !== -1) {
          card.classList.remove('hidden');
          phaseHasVisible = true;
          matchCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (section) {
        if (phaseHasVisible) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      }
    });

    // Hide checkpoints when searching
    document.querySelectorAll('.checkpoint-card').forEach(function(c) {
      c.classList.add('hidden');
    });

    searchCount.textContent = matchCount + ' result' + (matchCount !== 1 ? 's' : '');
  }

  // --- Scroll Spy ---

  function setupScrollSpy() {
    const sections = document.querySelectorAll('.phase-section');
    const navItems = document.querySelectorAll('.nav-item');

    function updateActiveNav() {
      let activeIndex = 0;
      const scrollTop = window.scrollY + 150;

      sections.forEach(function(section, idx) {
        if (section.offsetTop <= scrollTop) {
          activeIndex = idx;
        }
      });

      navItems.forEach(function(item, idx) {
        if (idx === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', throttle(updateActiveNav, 100));
    updateActiveNav();
  }

  // --- Intersection Observer (fade-in) ---

  function setupIntersectionObserver() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.phase-section, .checkpoint-card').forEach(function(el) {
      observer.observe(el);
    });
  }

  // --- Utility ---

  function debounce(fn, delay) {
    var timer;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(context, args); }, delay);
    };
  }

  function throttle(fn, limit) {
    var inThrottle = false;
    return function() {
      var context = this;
      var args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        inThrottle = true;
        setTimeout(function() { inThrottle = false; }, limit);
      }
    };
  }

  // --- Init ---

  document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    renderAll();
  });

})();
