function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "foto2.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "foto1.svg";
    }
}