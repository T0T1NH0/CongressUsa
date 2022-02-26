// HEADER
const ham = document.getElementById('hamburger');
const menuContainer = document.querySelector('.menuContainer');

ham.addEventListener('click', () => {
  ham.classList.toggle('girar');
  menuContainer.classList.toggle('activado');
});

const liSubMenu = document.querySelector('.liSubMenu');
const liSubMenu2 = document.querySelector('.liSubMenu2');
const liSubMenu3 = document.querySelector('.liSubMenu3');
const ulMenu1 = document.querySelector('.clickMenu');
const ulMenu2 = document.querySelector('.clickMenu2');
const ulMenu3 = document.querySelector('.clickMenu3');

liSubMenu.addEventListener('click', () => {
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
let buttonRead = document.querySelector('.buttonRead');
let hideText = document.getElementById('hideText');

const toggleText = () => {
  hideText.classList.toggle('showReadLess');

  hideText.classList.contains('showReadLess')
    ? (hideTextBtn.innerHTML = 'Read Less')(buttonRead.classList.toggle('less'))
    : (hideTextBtn.innerHTML = 'Read More')(buttonRead.classList.remove('less'));
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
