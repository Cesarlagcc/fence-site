$(document).ready(function(){
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 493) {
      $('.flex-container').addClass('navbar-fixed');
      $('body').css("margin-top","50px")
    }
    if ($(window).scrollTop() < 495) {
      $('.flex-container').removeClass('navbar-fixed');
      $('body').css("margin-top","0")
    }
  });
});