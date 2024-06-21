
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
    loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
    autoplay: {
        delay: 3000,  // Delay between slides in milliseconds
        disableOnInteraction: false,  // Enable or disable autoplay on user interactions
    }
});

var swiper= new Swiper(".mySwiper2", {
  autoHeight: true,
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
          const fixedHeaderHeight = 80; // Adjust this value according to your fixed header height
          const extraSpace = 20; // Adjust this value to add extra space above the section
          const offset = fixedHeaderHeight + extraSpace;

          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
      }
  });
});


var popupForm = document.getElementById("popupForm");

// Get the button that opens the modal
var btn = document.getElementById("contactUsButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  popupForm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popupForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popupForm) {
      popupForm.style.display = "none";
  }
}

