$(document).ready(function() {
    $('nav a').click(function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800); // 800 - время анимации в миллисекундах
    });
  });