$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 50){
      $(".nav-modify-style").removeClass('transparent');
      $(".nav-modify-style").addClass('red');
      $(".nav-modify-style").css('box-shadow', '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)');
      $(".button-collapse").css('color', '#FFF');
      $(".brand-logo").css('color', '#FFF');
      $(".nav-modify-style").css('transition', 'all 0.3s ease-out');
    }
    else{
      $(".nav-modify-style").removeClass('red');
      $(".nav-modify-style").addClass('transparent');
      $(".nav-modify-style").css('box-shadow', 'none');
      $(".button-collapse").css('color', 'rgba(0, 0, 0, 0.87)');
      $(".brand-logo").css('color', 'rgba(0, 0, 0, 0.87)');
      $(".nav-modify-style").css('transition', 'all 0.3s ease-in');
    }
  });
});