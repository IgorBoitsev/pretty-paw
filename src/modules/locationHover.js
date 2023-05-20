import { gsap } from "gsap";

export const locationHover = () => {
  const lcoationList = document.querySelector('.location__list'),
        locationItmes = document.querySelectorAll('.location__item');

  const mediaQueryLG = window.matchMedia('(min-width: 1024px)');
  const mediaQueryXL = window.matchMedia('(min-width: 1280px)');

  for (const item of locationItmes) {
    const content = item.querySelector('.location__content'),
          title = item.querySelector('.location__title'),
          description = item.querySelector('.location__description');
    
    const tl = gsap.timeline({paused: true});

    tl.to(content, {opacity: 0, duration: 0.2})
      .to(content, {
          transform: 'none',
          left: 0,
          bottom: 0,
          top: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          duration: 0
      })
      .to(title, {
        whiteSpace: 'unset',
        hyphens: 'auto',
        color: '#FFAA05',
        marginBottom: mediaQueryXL.matches ? '40px' : '24px',
        duration: 0
      })
      .to(description, { display: 'block', duration: 0})
      .to(content, { opacity: 1, duration: 0.2 });

      item.addEventListener('mouseenter', () => {
        if (mediaQueryLG.matches) {
          tl.play();

          gsap.to(lcoationList, {
            '--background-image': `url('${item.dataset.image}')`,
            '--opacity': 1,
            duration: 1
          });
        }
      });

      item.addEventListener('mouseleave', () => {
        if (mediaQueryLG.matches) {
          tl.reverse();

          gsap.to(lcoationList, {
            '--opacity': 0,
            duration: 1
          });
        }
      });

      const linkPreload = document.createElement('link');

      linkPreload.rel = 'preload';
      linkPreload.href = item.dataset.image;
      linkPreload.as = 'image';

      if (mediaQueryLG.matches) {
        document?.head.append(linkPreload);
      }

      mediaQueryLG.addEventListener('change', e => {
        if (!e.matches) {
          content.style = '';
          title.style = '';
          description.style = '';
        } else {
          document?.head.append(linkPreload);
        }
      });


  }
}