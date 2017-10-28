function scroll_Header() {
    var scrollPosition;
    var header = document.querySelector('.header-Paralax');
    var icons = document.querySelector('.icon-Paralax');

    scrollPosition = window.scrollY;

    if(window.matchMedia("(min-resolution: 96dpi)").matches) {
        if(scrollPosition <= 1400) {
            icons.style.position = "";
            header.style.opacity = 1 - (scrollPosition / 1400);
            icons.style.boxShadow = "0 0 0";
        }else {
            icons.style.position = "fixed";
            icons.style.top = "0";
            icons.style.width = "100%";
            icons.style.background = "rgba(255, 255, 255, 0.85)";
            icons.style.boxShadow = "0 2px 6px #636363";        
        }   
    }
    if(window.matchMedia("(min-resolution: 192dpi)").matches) {
        if(scrollPosition <= 1650) {
            icons.style.position = "";
            header.style.opacity = 1 - (scrollPosition / 1650);
            icons.style.boxShadow = "0 0 0";
        }else {
            icons.style.position = "fixed";
            icons.style.top = "0";
            icons.style.width = "100%";
            icons.style.background = "rgba(255, 255, 255, 0.85)";
            icons.style.boxShadow = "0 2px 6px #636363";        
        }   
    }
}
window.addEventListener('scroll', scroll_Header);
