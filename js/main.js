// Geneating an active hambuger menu
const hamburger = document.querySelector("#hamburger-menu");
const navmenu = document.querySelector("#navigation--menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

// Generating home slideshow slide
const btns = document.querySelectorAll(".navbtn");
const slides = document.querySelectorAll(".picture-slide");
const contents = document.querySelectorAll(".content");

function sliderNav(manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Generating popular navigation slide
var swiper = new Swiper(".popular-content", {
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,

  autoplay: {
    delay: 755500,
    disableOnInteraction: false,
  },

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      280: {
          slidesPerView: 1,
          spaceBetween: 10,
      },

      320: {
          slidesPerView: 2,
          spaceBetween: 10,
      },

      510: {
          slidesPerView: 2,
          spaceBetween: 10,
      },

      701: {
          slidesPerView: 3,
          spaceBetween: 15,
      },

      900: {
          slidesPerView: 4,
          spaceBetween: 20,
      },

      1024: {
          slidesPerView: 4,
          spaceBetween: 25,
      }
  }
});