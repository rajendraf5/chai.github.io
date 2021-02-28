jQuery(document).ready(function( $ ) {

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });


    $('.page-scroll').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    
// stickey menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });


    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 150) {
    //         $("header").addClass("sticky");
    //         setTimeout(function() {
    //             $(".logo").addClass("logo-sticky");
    //         }, 350);
    //     } else {
    //         $("header").removeClass("sticky");
    //         setTimeout(function() {
    //             $(".logo").removeClass("logo-sticky");
    //         }, 350);
    //     }
    // });

    // Testimonials carousel (uses the Owl Carousel library)
      $(".testimonials-carousel").owlCarousel({
       autoplay: true,
        nav: false,
        dots: true,
        loop: true,
        //navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
  $('.page-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

});    

!function(a) {
    //"use strict";
    a(".page-scroll").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), b.preventDefault();
    }), a("body").scrollspy({
        target: ".navbar",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click();
    });
}(jQuery);