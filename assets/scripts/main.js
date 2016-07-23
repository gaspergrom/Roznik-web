$(function() {
  //main slider on index page
  $("#main-slider").owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplaySpeed: 1300,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots:false,
      responsive: {
          0: {
              items: 1
          }
      }
  });

  //opinions slider on index page
  $("#opinions").owlCarousel({
      loop: true,
      dots:true,
      autoplay:true,
      autoplayTimeout:8000,
      autoplaySpeed: 700,
      nav: true,
      navText: [
      "<span class='mdi mdi-chevron-left'></span>",
      "<span class='mdi mdi-chevron-right'></span>"
      ],
      responsive: {
          0: {
              items: 1
          }
      }
  });


  $("#storitve").owlCarousel({
      loop: true,
      dots:true,
      dotsEach: true,
      margin: 10,
      nav: true,
      navText: [
      "<span class='mdi mdi-chevron-left'></span>",
      "<span class='mdi mdi-chevron-right'></span>"
      ],
      responsive: {
          0: {
              items: 1
          },
          767: {
              items: 2
          },
          991: {
              items:3
          },
          1399: {
              items: 4
          }
      }
  });

    var btn=$('.header__btn');
    var header=$('header nav');
    btn.click(function(e) {
        e.preventDefault();
        header.toggleClass('open');
        btn.toggleClass('header__btn--open');
        $('body').toggleClass("overflow");
    });
});
