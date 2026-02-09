$('.yearSlider').owlCarousel({
    loop:true,
    margin:0,
    items: 1,
    autoplay: true,
    smartspeed: 500,
    dots:true,
    dotEach: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('active');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('active');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });



// Swiper activation 
const swiper = new Swiper('.bannerSwipper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
});

// Counterup js 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Thumbnail Initialize
var swiperThumbs = new Swiper(".thumbSlider", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    // Eita vertical height fix kore
    observer: true,
    observeParents: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Main Initialize
var swiperMain = new Swiper(".mainSlider", {
    spaceBetween: 10,
    loop: true,
    autoplay: { delay: 3000 },
    thumbs: {
        swiper: swiperThumbs,
    },
    observer: true,
    observeParents: true
});


