
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 10, // Space between each slide
    loop: true, // Enable looping mode
    
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });