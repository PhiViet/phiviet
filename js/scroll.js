$(document).ready(function () {
  $(window).scroll(function(){
      var ScrollTop = parseInt($(window).scrollTop());
      console.log(ScrollTop);

      if (ScrollTop > 10 && ScrollTop < 150) {
          $(".btninfo").css("text-shadow", "0 0 0.2em blue, 0 0 0.4em blue,0 0 0.4em blue");
          $(".btninfo").css("font-size", "22px");
      }
      else{
          $(".btninfo").removeAttr("style");
      }
      
      if (ScrollTop > 170 && ScrollTop < 550) {
          $(".btnskill").css("text-shadow", "0 0 0.2em blue, 0 0 0.4em blue,0 0 0.4em blue");
          $(".btnskill").css("font-size", "22px");
      }
      else{
          $(".btnskill").removeAttr("style");
      }

      if (ScrollTop >= 650 && ScrollTop < 900) {
          $(".btnedu").css("text-shadow", "0 0 0.2em blue, 0 0 0.4em blue,0 0 0.4em blue");
          $(".btnedu").css("font-size", "22px");
      }
      else{
          $(".btnedu").removeAttr("style");
      }

      if (ScrollTop >=1000 && ScrollTop < 1400) {
          $(".btncontact").css("text-shadow", "0 0 0.2em blue, 0 0 0.4em blue,0 0 0.4em blue");
          $(".btncontact").css("font-size", "22px");
      }
      else{
          $(".btncontact").removeAttr("style");
      }

  });
});