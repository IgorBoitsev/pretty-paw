import './index.html';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { sliderInit } from './modules/sliders';

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
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

const videoBG = document.querySelector('.video-bg');
videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;

