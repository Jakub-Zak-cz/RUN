let transMenu = document.querySelector (".transition-menu");
let navMenu = document.querySelector (".nav__menu");
let transitionLinks = document.querySelectorAll(".transition__link");
let isOpen = false;

// navMenu.addEventListener("click", function () {
//     transMenu.classList.toggle("js-open");
//     navMenu.classList.toggle("js-open");
//   });

navMenu.addEventListener("click", function () {
    if (transMenu.classList.contains("js-open")) {
      transMenu.classList.remove("js-open");
    } else {
      transMenu.classList.add("js-open");
      navMenu.classList.add("js-open");
    //   navMenu.querySelector(".menu__img").style.transform = "rotate(180deg)";
    }

    if (isOpen) {
        document.querySelector(".menu__img").style.transform = "rotate(0deg)";
        isOpen = false;
      } else {
        document.querySelector(".menu__img").style.transform = "rotate(180deg)";
        isOpen = true;
      }
  });

transitionLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      transMenu.classList.remove("js-open");
    });
  }); 
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.sale-slider').slick({
    slidesToShow: 2,
    prevArrow: $(".left__white"),
    nextArrow: $(".right__white"),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  });

$('.review-slick').slick({
    prevArrow: $(".review__left"),
    nextArrow: $(".review__right"),
});

$(".header-slider").slick({
    prevArrow: $(".info__left"),
    nextArrow: $(".info__right"),
    responzive : [
        {
            breakpoint : 1200,
            settings : {
                autoplay: true,
                autoplaySpeed: 100,
            }
        }
    ]
});