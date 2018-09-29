// console.log('jello');
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

//=====REQUEST MAGIC SEAWEED API ====
// http://magicseaweed.com/api/YOURAPIKEY/forecast/?spot_id=10

// var gifSearch = $('.gif-input').val();
//         var mswUrl = "http://magicseaweed.com/api/";
//         var apiKey = " ";
//         var completeUrl = `${mswUrl}${apiKey}forecast/?spot_id=255`;
//         console.log(mswUrl);
//         console.log(completeUrl);

// $.ajax({
//     method: 'GET';
//     url: completeUrl,
//     success: handleSuccess,
//     error: handleError,
// })

// function handleSuccess (e) {
//     function handleSuccess(response) {
//     for (let i = 0; i < response.length; i++) {
//         $('#user-data').append(`<p>${response[i].name}<br />${response[i].phone}</p>`);
//     }

//     response.forEach(function (user) {
//       $('.container').append(`${response}`);
//         })

//     }
// }

// function handleError (error) {
//     console.error(error);
// }







