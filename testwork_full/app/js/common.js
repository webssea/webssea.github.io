$(function() {

	// parallax////////////////
  $(window).on('mousemove', function(e) {
  var w = $(window).width();
  var h = $(window).height();
  var offsetX = 0.5 - e.pageX / w;
  var offsetY = 0.5 - e.pageY / h;

  $(".parallax").each(function(i, el) {
   var offset = parseInt($(el).data('offset'));
   var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

   $(el).css({
   '-webkit-transform': translate,
   'transform': translate,
   'moz-transform': translate
   });
  });
});




});


$(document).ready(function(){

// menu/////////////////////

$('.menu__icon').on('click', function() {
$(this).closest('.main_menu').toggleClass('menu_state_open');
});


// owl//////////////

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  center: true,
  items: 5,
  smartSpeed: 1200,
  // autoHeight: true,
  navText: [
    "<i class='far fa-arrow-alt-circle-left'></i>",
    "<i class='far fa-arrow-alt-circle-right'></i>",
    // "<i class='fa fa-caret-right'></i>"
  ],
  // autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    320: {
      items: 1.6
    },
    500: {
      items: 1.8
    },
    800: {
      items: 5
    },

  }
})



});
