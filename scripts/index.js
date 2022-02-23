// HEADER
const ham = document.getElementById('hamburger');
const enlaces = document.getElementById('liMenu');
const enlaces2 = document.getElementById('liMenu2');
const enlaces3 = document.getElementById('liMenu3');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  enlaces2.classList.toggle('activado');
  enlaces3.classList.toggle('activado');
  ham.classList.toggle('girar');
});

const liSubMenu1 = document.querySelector('.liSubMenu');
const liSubMenu2 = document.querySelector('.liSubMenu2');
const liSubMenu3 = document.querySelector('.liSubMenu3');
const ulMenu1 = document.querySelector('.clickMenu');
const ulMenu2 = document.querySelector('.clickMenu2');
const ulMenu3 = document.querySelector('.clickMenu3');

liSubMenu1.addEventListener('click', () => {
  ulMenu1.classList.toggle('activado');
});
liSubMenu2.addEventListener('click', () => {
  ulMenu2.classList.toggle('activado');
});
liSubMenu3.addEventListener('click', () => {
  ulMenu3.classList.toggle('activado');
});

// READ MORE / READ LESS BUTTON

let hideTextBtn = document.getElementById('hideTextBtn');
let hideText = document.getElementById('hideText');

const toggleText = () => {
  hideText.classList.toggle('showReadLess');

  hideText.classList.contains('showReadLess')
    ? (hideTextBtn.innerHTML = 'Read Less')
    : (hideTextBtn.innerHTML = 'Read More');
};
try {
  hideTextBtn.addEventListener('click', () => toggleText());
} catch (error) {}

// GO TOP

let goTopContainer = document.querySelector('.goTopContainer');

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    goTopContainer.classList.add('show');
  } else {
    goTopContainer.classList.remove('show');
  }
};

goTopContainer.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
