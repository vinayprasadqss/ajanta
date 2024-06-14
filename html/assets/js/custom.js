
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper= new Swiper(".mySwiper2", {
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


  document.querySelectorAll(".scrollButton").forEach(button => {
    button.addEventListener("click", function() {
        const target = document.querySelector(this.getAttribute("data-target"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});




 
