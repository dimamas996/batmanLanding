/* import Swiper, { Navigation } from 'swiper'; */

// Now you can use Swiper
const swiper = new Swiper(".main-slider", {
  // Install modules
  //slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  /* modules: [Navigation], */
  navigation: {
    nextEl: ".main-slider__arrow",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});


let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';    
});


const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
    console.log(e);
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) e.currentTarget.classList.remove('active');
}); 