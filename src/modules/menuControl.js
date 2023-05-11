import { gsap } from "gsap";

export const menuControl = (navButtonSelector, navListSelector, navItemsSelector) => {
  const navigationButton = document.querySelector(navButtonSelector),
        navigationList = document.querySelector(navListSelector),
        navigationItems = document.querySelectorAll(navItemsSelector);

  const navigationActiveClass = navButtonSelector.slice(1);

  const tl = gsap.timeline({ paused: true});

  tl.fromTo(navigationList, 
    { opacity: 0, display: 'none' },
    {opacity: 1, display: 'block'}
  );

  navigationItems.forEach((elem, i) => {
    const x = i % 2 ? 500 : -500;
    tl.from(elem, {opacity: 0, x: x, duration: 1}, '-=1');
  });

  const toggleMenu = () => {
    if (navigationButton.classList.contains(navigationActiveClass + '-active')) {
      navigationButton.classList.remove(navigationActiveClass + '-active');
      tl.reverse();
      // navigationList.style.display = 'none';
    } else {
      navigationButton.classList.add(navigationActiveClass + '-active');
      tl.play();
      // navigationList.style.display = 'block';
    }
  };

  const checkScreenSize = e => {
    if (e.matches) {
      gsap.set(navigationList, {opacity: 1, display: 'flex'});
      navigationItems.forEach((elem, i) => {
        gsap.set(elem, {opacity: 1, x: 0});
      });
    } else {
      gsap.set(navigationList, {opacity: 0, display: 'none'});
      navigationItems.forEach((elem, i) => {
        const x = i % 2 ? 500 : -500;
        gsap.set(elem, {opacity: 0, x, duration: 1});
      });
    }
  }

  navigationButton.addEventListener('click', toggleMenu);

  const mediaQuery = window.matchMedia('(min-width: 1280px)');
  mediaQuery.addEventListener('change', checkScreenSize);
  checkScreenSize(mediaQuery);
}