$(document).on("ready", function(){

    $('.gif-form').on('submit', function (e) {
        e.preventDefault();
        console.log("dog");
    });
        var gifSearch = $('.gif-input').val();
        var gifUrl = "http://api.giphy.com/v1/gifs/search?q=" + gifSearch;
        var apiKey = "5H7NRzYES37QWyHaKbt1ufboIZGpQSoV";
        var completeUrl = `${gifUrl}&api_key=${apiKey}`;
        console.log(gifUrl);
        console.log(completeUrl);

        $.ajax({
            // What kind of request
            method: "GET",
            // The URL for the request
            url: completeUrl,
            // The data to send aka query parameters
            data: $(".gif-form").serialize(),
            // Code to run if the request succeeds;
            // the response is passed to the function
            success: onSuccess,
            // Code to run if the request fails; the raw request and
            // status codes are passed to the function
            error: onError
        })

  

    function onSuccess(json) {
        
        for (let i = 0; i < json.data.length; i++) {
            $('.gif-gallery').append(`<img src="${json.data[i].images.original.url}"/>`)
        console.log(json);
        // console.log(json.data[0].url)
        }
    }

    function onError(xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
    }
});




