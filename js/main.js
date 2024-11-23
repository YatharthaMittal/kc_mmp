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
    breakpoints: {
      // when window width is >= 320px
      991: {
        slidesPerView: auto,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: auto,
        spaceBetween: 30
      },
    }
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
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: auto,
        spaceBetween: 10
      },
      // 480px and up
      480: {
        slidesPerView: auto,
        spaceBetween: 15
      },
      991: {
        slidesPerView: auto,  
      },
      1024: {
        slidesPerView: auto,
      },
    }
  });