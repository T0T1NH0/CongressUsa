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

// READ MORE / READ LESS BUTTON

let hideTextBtn = document.getElementById('hideTextBtn');
let hideText = document.getElementById('hideText');

const toggleText = () => {
  hideText.classList.toggle('show');

  hideText.classList.contains('show')
    ? (hideTextBtn.innerHTML = 'Read Less')
    : (hideTextBtn.innerHTML = 'Read More');
};

hideTextBtn.addEventListener('click', () => toggleText());

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
