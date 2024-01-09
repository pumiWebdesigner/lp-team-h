window.onload = function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    speed: 2000,
    slidesPerView: 2,
  });
};
