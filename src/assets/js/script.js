var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 0,
  },
  loop: true,
  speed: 8000,
  centeredSlides: true,
  preventInteractionOnTransition: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
