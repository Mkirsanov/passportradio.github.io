
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.image_overlay').on('click', function(e){
    $('.work_modal').css({'left':'0','opacity':1});
  });
  $('.work_modal_close').on('click', function(e){
    $('.work_modal').css({'left':'100%','opacity':0});
  });

  $('.work_modal_close').jrumble();

  var demoStart = function(){
    $('.work_modal_close').trigger('startRumble');
    setTimeout(demoStop, 300);
    };

    var demoStop = function(){
    $('.work_modal_close').trigger('stopRumble');
    setTimeout(demoStart, 300);
  };
  demoStart();
  
});


//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(

  function() { 

    $("html").niceScroll({
    	cursorcolor:"#f74d65",
    	scrollspeed :"100",
    	cursorborder:"1px solid #f74d65",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });

  }

);

new WOW().init();

