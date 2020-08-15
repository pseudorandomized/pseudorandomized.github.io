(function($) {
  "use strict";

  $(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  })

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav'
  });
  $('[data-toggle="popover"]').popover();
})(jQuery);

$.get('https://raw.githubusercontent.com/pseudorandomized/pseudorandomized.github.io/master/news.yaml', function(data) {
  var obj1 = jsyaml.load(data);

  for (ns in obj1["news"]) {
    document.getElementById("123").innerHTML += "<p>" + obj1["news"][ns] + "</p>";
  }
});

function showmodal(x) {
  let y = '<iframe src="' + x + '" width="900" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>';
  document.getElementById("mod-bod").innerHTML = y;
}
