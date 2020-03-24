// main header
window.onscroll = function () {
    mainHeader()
};

function mainHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").className = "fixed navbar";
    } else {
        document.getElementById("nav").className = "navbar";
    }

    // mobile

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("mobileHeaderX").className = "fixed mobile-header";
    } else {
        document.getElementById("mobileHeaderX").className = "mobile-header";
    }
};

//close and open btn

function closeMenu() {
    document.getElementById('mobile').style.transform= "translateX(-100%)";
    document.getElementById('mobile').style.opacity="0";
    document.getElementById('overlay').style.transform="translateX(-100%)";
    document.getElementById('overlay').style.borderRadius="0 100% 100% 0";
}

function openMenu() {
    document.getElementById('mobile').style.transform= "translateX(0%)";
    document.getElementById('mobile').style.opacity="1";
    document.getElementById('overlay').style.transform="translateX(0%)";
    document.getElementById('overlay').style.borderRadius="0";

};

// parners slider

$(function() {
    
$('.partners').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnFocus: false,
    autoplaySpeed: 1000
});
})

// we can slider

$('.sliders').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 3300,
    autoplaySpeed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// aos animation

$(function() {
    AOS.init();
})

// active class 
// Add active class to the current button (highlight it)
var header = document.getElementById("menu-nav");
var btns = header.getElementsByClassName("btn-menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}