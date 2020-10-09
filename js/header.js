const nav = document.getElementById('navigation');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerIcon.addEventListener('click', () => {
  nav.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  nav.classList.remove('open');
});