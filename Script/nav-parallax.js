$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 200){
      $(".navbar-parallax").removeClass('transparent');
      $(".navbar-parallax").addClass('white');
      $(".navbar-parallax").css('box-shadow', '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)');
      $(".responsive-img").attr('src', 'Imagens/developer-icon-black.png');
      $(".nav-link").css('color', '#000');
      $(".button-collapse").css('color', "rgba(0, 0, 0, 0.87)");
      $(".fab").css('color', "rgba(0, 0, 0, 0.87)");
      $(".navbar-parallax").css('transition', 'all 0.3s ease-out');
    }
    else{
      $(".navbar-parallax").removeClass('white');
      $(".navbar-parallax").addClass('transparent');
      $(".navbar-parallax").css('box-shadow', 'none');
      $(".responsive-img").attr('src', 'Imagens/developer-icon.png');
      $(".nav-link").css('color', '#FFF');
      $(".button-collapse").css('color', "#FFF");
      $(".fab").css('color', "#FFF");
      $(".navbar-parallax").css('transition', 'all 0.3s ease-in');
    }
  });
});