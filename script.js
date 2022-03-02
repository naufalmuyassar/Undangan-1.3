$('#OpenEnvitation').click(function(){
  $('body').css('overflow-y', 'scroll');
  $('.section-1').css('position', 'relative');
 $('html,body').animate({scrollTop: $(".section-2").offset().top},'slow');
  
})
new WOW().init();

///timeinterval
var countDownDate = new Date("Jun 20, 2021 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  let view = '<div class="time">'+
              '<div class="value-time">'+days+'</div>'+
              '<div class="sub-time">days</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+hours+'</div>'+
              '<div class="sub-time">hours</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+minutes+'</div>'+
              '<div class="sub-time">minutes</div>'+
             '</div>'+
             '<div class="time">'+
              '<div class="value-time">'+seconds+'</div>'+
              '<div class="sub-time">second</div>'+
             '</div>';
  document.getElementById("saveTheDate").innerHTML = view;
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("saveTheDate").innerHTML = "EXPIRED";
  }
}, 1000);

$('.slide-bride').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail: true,
});