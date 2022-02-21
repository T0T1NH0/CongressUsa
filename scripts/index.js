// HEADER

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

// READ MORE / READ LESS BUTTON

let hideTextBtn = document.getElementById('hideTextBtn');
let hideText = document.getElementById('hideText');

hideTextBtn.addEventListener('click', () => toggleText());

function toggleText() {
  hideText.classList.toggle('show');

  hideText.classList.contains('show')
    ? (hideTextBtn.innerHTML = 'Read Less')
    : (hideTextBtn.innerHTML = 'Read More');
}

// GO TOP

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.goTopContainer').classList.add('show');
  } else {
    document.querySelector('.goTopContainer').classList.remove('show');
  }
};

document.querySelector('.goTopContainer').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
