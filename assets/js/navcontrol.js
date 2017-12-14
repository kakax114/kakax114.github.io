$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('solid');
    $('nav').addClass('fontcolor');
  } else {
    $('nav').removeClass('solid');
  $('nav').removeClass('fontcolor');
  }
});