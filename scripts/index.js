const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.liMenu');

ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  ham.classList.toggle('girar');
});

const liSubMenu = document.querySelectorAll('.liSubMenu');

for (let i = 0; i < liSubMenu; i++) {
  liSubMenu[i].addEventListener('click', function () {
    if (Window.innerWidth < 769) {
      const subMenu = this.nextElementSibling;
      const height = subMenu.scrollHeight;

      if (subMenu.classList.contains('desplegar')) {
        subMenu.classList.remove('desplegar');
        subMenu.removeAttibute('style');
      } else {
        subMenu.classList.add('desplegar');
        subMenu.style.height = height + 'px';
      }
    }
  });
}
