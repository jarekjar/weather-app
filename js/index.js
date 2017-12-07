$(document).ready(function () {
    $(".location").hide();
    $(".temp_f").hide();
    $(".temp_c").hide();
    $(".text").hide();
    $(".icon").hide();
    $(".load").hide();
    var pos = {};
    $(".show").on("click", getWeather)
    $("#temp").on("click", toggleShow)
    });
    var toggleShow = function () {
      $(".temp_f").toggle("slow")
      $(".temp_c").toggle("slow")
    }
    var getWeather = function () {
        $(".show").toggleClass("hidden");
        $(".load").show("slow");
        
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //console.log(pos);
            $.getJSON(
                "https://api.apixu.com/v1/current.json?key=6acd666563c644979dd170248170205&q=" +
                pos.lat +
                "," +
                pos.lng,
                function (data) {
                    console.log(data);
                    $(".location").text(data.location.name);
                    $(".temp_c").html(data.current.temp_c + " ºC");
                    $(".temp_f").html(data.current.temp_f + " ºF");
                    $(".text").text(data.current.condition.text);

                    $(".icon").attr("src", "https://" + data.current.condition.icon);
                    $(".load").toggleClass("hidden");
                    $(".location").show("slow");
                    $(".temp_f").show("slow"); 
                    $(".text").show("slow");
                    $(".icon").show("slow");
                }
            );
        });
    };