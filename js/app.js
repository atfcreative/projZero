$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// // Smooth scroll stuff
//     $('.sidebar a').on('click', function(e) {
//       // prevent the standard link operation on click
//       e.preventDefault();
//       // use the href of the link to identify what
//       // section to scroll to
//       var thisTarget = $(this).attr('href');
//       // get that section's top offset
//       var targetOffset = $(thisTarget).offset().top;
//       // use jQuery.animate() to animate the body's
//       // scrollTop to the targetOffest
//       $('body').animate({
//         scrollTop: targetOffset
//       }, 600);
//     });


//Global vars
var menuButton = document.querySelector('i');
//menu click event listener
menuButton.addEventListener('click', handleMenuClick);
///handle menu click
function handleMenuClick () {
    // console.log('click!');
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-hidden')) {
        sidebar.classList.toggle('sidebar-hidden');
        menuButton.style.color = '#000';
        menuButton.classList.remove('fa-bars');
        menuButton.classList.add('fa-times');

    } else {
        sidebar.classList.toggle('sidebar-hidden');
        menuButton.style.color = '#000';
        menuButton.classList.remove('fa-times');
        menuButton.classList.add('fa-bars');
    }
}

// //Global vars
// var navButton = document.getElementById('design');
// //menu click event listener
// navButton.addEventListener('click', pageSlide);
// ///handle menu click
// function pageSlide () {
//     // console.log('click!');
//     var swipe = document.querySelector('.swipe');
//     if (swipe.classList.contains('swipe-hidden')) {
//         swipe.classList.toggle('swipe-hidden');
//     } else {
//         swipe.classList.toggle('swipe-hidden');
//     }
// }

// var navButton = document.getElementById('stuff');
// //menu click event listener
// navButton.addEventListener('click', pageSlider);
// ///handle menu click
// function pageSlider () {
//     // console.log('click!');
//     var swiper = document.querySelector('.swiper');
//     if (swiper.classList.contains('swiper-hidden')) {
//         swiper.classList.toggle('swiper-hidden');
//         swiper.classList.addClass('swiper');
//     } else {
//         swiper.classList.toggle('swiper-hidden');
//     }
// }

//Design tab to animate slider
var navButton = document.getElementById('design');
//menu click event listener
navButton.addEventListener('click', pageSlide);
///handle menu click
function pageSlide () {
    var swipe = document.querySelector('.swipe');
    swipe.classList.toggle('swipe-hidden');
    stateChange();
    bgChange();
}

function stateChange() {
    $('.swipe').fadeOut(3000);
}

function bgChange() {
    $('.container').removeClass('red').addClass('bgStuff');
}


//Stuff tab to animate slider
var navButton = document.getElementById('stuff');
//menu click event listener
navButton.addEventListener('click', pageSlideR);
///handle menu click
function pageSlideR() {
    console.log('clicked swipe r');

    var swiper = document.querySelector('.swiper');
    setTimeout(function(){
        swiper.classList.toggle('swiper-hidden');
     }, 3000);

    swiper.classList.toggle('swiper-hidden');
}

// grab text class to fade in/out
(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;
//call on next quote
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();










