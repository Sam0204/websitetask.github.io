document.addEventListener("DOMContentLoaded", function () {
  // Initialize Hero Slider
  var heroSwiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-slider .swiper-pagination',
      clickable: true,
    },
  });

  // Initialize Events Slider with navigation arrows; showing 3 events per view on desktop
  var eventsSwiper = new Swiper('.events-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.events-next',
      prevEl: '.events-prev',
    },
    pagination: {
      el: '.events-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 1
      }
    }
  });

  // Initialize Testimonial Slider with centered slides and navigation arrows
  var testimonialSwiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.testimonial-next',
      prevEl: '.testimonial-prev',
    },
    pagination: {
      el: '.testimonial-slider .swiper-pagination',
      clickable: true,
    }
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true,
  });
});
