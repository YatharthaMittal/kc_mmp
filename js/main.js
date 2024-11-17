// quality swiper slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 10,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // about slide
  var aboutswiper = new Swiper(".aboutmySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  // inds slider
  var indsswiper = new Swiper(".indusmySwiper", {
    // spaceBetween: 30,
    // centeredSlides: false,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });