$(document).ready( function (){
  $('#menu a').click(function() {

    if($(this).hasClass("menu-portfolio")){
      $('#menu a').removeClass('active');
      $(this).addClass('active');

      $("#header").css({
        "position": "relative",
        "transform": "translateY(0)",
        "top": "auto"
      });
      $(".projects").css("display","block");
    }else{
      $('#menu a').removeClass('active');
      $("#header, .projects").removeAttr('style');
    }
  });
});
