const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

toggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 650) nav.style.display = '';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
