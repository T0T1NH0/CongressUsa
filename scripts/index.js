const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.linksMenu');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  ham.classList.toggle('girar');
});
