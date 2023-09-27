document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const overlay = document.querySelector('.overlay');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
  });
});
