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
    document.getElementById('mobile').style.transform= "translateX(100%)";
}

function openMenu() {
    document.getElementById('mobile').style.transform= "translateX(0%)";
};

$(function() {
    
$('.partners').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000
});
})