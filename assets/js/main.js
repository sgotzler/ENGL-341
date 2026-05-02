// ENGL 341 — minor menu interactions
// Most of the menu open/close is handled with the :target CSS selector.
// This script just closes the menu when a navigation link is clicked
// and adds a tasteful keyboard escape.

(function () {
  'use strict';

  function closeMenu() {
    if (window.location.hash === '#menu') {
      // Remove the hash without leaving a history entry
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.querySelectorAll('#menu a, .menu-close, #menu-close-overlay').forEach(function (el) {
    el.addEventListener('click', function (e) {
      // Allow nav links to navigate, but close the panel state after.
      // For close button and overlay (href="#"), prevent the leading hash.
      if (el.classList.contains('menu-close') || el.id === 'menu-close-overlay') {
        e.preventDefault();
      }
      closeMenu();
    });
  });
})();
