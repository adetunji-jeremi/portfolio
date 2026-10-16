'use strict';

const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#primary-nav');

if (menuButton && navigation) {
  menuButton.hidden = false;
  navigation.dataset.collapsible = 'true';

  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
}

// Open a case study when it is reached through an internal link or direct URL.
function revealLinkedCase() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target && target.tagName === 'DETAILS') target.open = true;
}
window.addEventListener('hashchange', revealLinkedCase);
revealLinkedCase();

document.querySelector('#year').textContent = String(new Date().getFullYear());
