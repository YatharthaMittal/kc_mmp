// quality swiper slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    infinite: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pauses on hover
      waitForTransition: true, // waits for transition to end before next slide
  },
    slidesPerView: "auto",
    loop: true,
    infinite: true,
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
      991: {
        pagination: false,
        slidesPerView: "auto",
        spaceBetween: 30
      },
      1024: {
        slidesPerView: "auto",
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
    loop: true,
    infinite: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pauses on hover
      waitForTransition: true, // waits for transition to end before next slide
  },
  });

  // inds slider
  var indsswiper = new Swiper(".indusmySwiper", {
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop: true,
    infinite: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // pauses on hover
      waitForTransition: true, // waits for transition to end before next slide
  },
    breakpoints: {
      320: {
        pagination: false,
        slidesPerView: "auto",
        spaceBetween: 10
      },  
      480: {
        pagination: false,
        slidesPerView: "auto",
        spaceBetween: 15
      },
      991: {
        slidesPerView: "auto",  
      },
      1024: {
        slidesPerView: "auto",
      },
    }
  });