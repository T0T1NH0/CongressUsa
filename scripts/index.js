const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.liMenu');
const enlaces2 = document.querySelector('.liMenu2');
const enlaces3 = document.querySelector('.liMenu3');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  enlaces2.classList.toggle('activado');
  enlaces3.classList.toggle('activado');
  ham.classList.toggle('girar');
});
