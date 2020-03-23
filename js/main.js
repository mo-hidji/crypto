// main header
window.onscroll = function () {
    mainHeader(), mobileHeader()
};

function mainHeader() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("nav").className = "fixed navbar";
    } else {
        document.getElementById("nav").className = "navbar";
    }

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("mobileHeaderX").className = "fixed mobile-header";
    } else {
        document.getElementById("mobileHeaderX").className = "mobile-header";
    }
}

//close and open btn

function closeMenu() {
    document.getElementById('mobile').style.transform= "translateX(100%)";
}

function openMenu() {
    document.getElementById('mobile').style.transform= "translateX(0%)";
}
