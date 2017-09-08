function scrollHeader() {
    var scrollPosition;
    var containerHEADER = document.querySelector('.header-paralax');
    var containerICON = document.querySelector('.icon-paralax');

    scrollPosition = window.scrollY;
    if(scrollPosition <= 577) {
        containerICON.style.position = "";
        containerHEADER.style.opacity = 1 - (scrollPosition / 577);
        containerICON.style.boxShadow = "0 0 0";
    }else {
        containerICON.style.position = "fixed";
        containerICON.style.top = "0";
        containerICON.style.width = "100%";
        containerICON.style.background = "rgba(255, 255, 255, 0.85)";
        containerICON.style.boxShadow = "0 2px 6px #636363";        
    }
}
window.addEventListener('scroll', scrollHeader);