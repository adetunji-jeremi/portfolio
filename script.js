'use strict';

// Keep project notes compact, opening the selected outline when linked to.
function revealProject() {
  const project = document.getElementById(window.location.hash.slice(1));
  if (project instanceof HTMLDetailsElement) project.open = true;
}

window.addEventListener('hashchange', revealProject);
document.querySelectorAll('.work-list a').forEach((link) => {
  link.addEventListener('click', () => {
    const project = document.getElementById(link.hash.slice(1));
    if (project instanceof HTMLDetailsElement) project.open = true;
  });
});
revealProject();

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
