import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videobackground';
import { menuControl } from './modules/menuControl';

// use modules

sliderInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
});

sliderInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination'
  },
  breakpoints: {
    425: {
      pagination: false,
      slidesPerView: 2,
    },
    768: {
      pagination: false,
      slidesPerView: 3,
    },
    1024: {
      pagination: false,
      slidesPerView: 3,
      spaceBetween: 26
    },
    1240: {
      pagination: false,
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

videoBackgroundInit('.video-bg');
menuControl('.navigation__button', '.navigation__list', '.navigation__item');