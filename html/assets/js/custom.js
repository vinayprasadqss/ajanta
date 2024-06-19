var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: {
        releaseOnEdges: false, 
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: false
});
class Slider {
    constructor(options) {
      this.sections = document.querySelectorAll(options.section);
      this.navigation = document.querySelector(options.dots);
      this.bannerSlider = document.querySelector('.bannerslider');
  
      this.navigation.addEventListener('click', this.scrollToSection.bind(this));
      window.addEventListener('scroll', this.setDotStatus.bind(this));
    }
  
    removeDotStyles() {
      const dots = this.navigation.querySelectorAll('.nav-dot');
      dots.forEach(dot => dot.classList.remove('is-active'));
    }
  
    setDotStatus() {
      const scrollPosition = window.scrollY;
      const bannerSliderTop = this.bannerSlider.offsetTop;
      const bannerSliderHeight = this.bannerSlider.offsetHeight;
      const bannerSliderBottom = bannerSliderTop + bannerSliderHeight;
  
      // Show dots only if scroll position is within the banner slider section
      if (scrollPosition >= bannerSliderTop && scrollPosition < bannerSliderBottom) {
        this.navigation.classList.remove('hide-dots');
      } else {
        this.navigation.classList.add('hide-dots');
      }
  
      // Update dot active status within the banner slider section
      this.sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.removeDotStyles();
          const dots = Array.from(this.navigation.children);
          dots[index].classList.add('is-active');
        }
      });
    }
  
    scrollToSection(e) {
      const dots = Array.from(this.navigation.children);
  
      dots.forEach((dot, index) => {
        if (dot === e.target) {
          window.scrollTo({
            top: this.sections[index].offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }
  }
  
  new Slider({
    section: '.bannerslider .section',
    dots: '#js-dots',
  });
  
  

swiper.on('slideChange', function () {
    swiper.params.mousewheel.releaseOnEdges = false;
    if (swiper.isEnd) {
        setTimeout(function() {
            swiper.params.mousewheel.releaseOnEdges = true;
            swiper.update();
        }, 1000);
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

// scroll down button
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


//popup

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






// back to top script

let backToTopButton = document.getElementById("backToTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}


backToTopButton.onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  


//display none backtotop button in another section

  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const footer = document.querySelector('footer');

    function checkFooterVisibility() {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('resize', checkFooterVisibility);
    
    // Initial check
    checkFooterVisibility();
});




 
