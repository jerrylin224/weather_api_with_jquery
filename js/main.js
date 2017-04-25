$(document).ready(function() {
  var zip = $('#zip').val();
  // var zip = "123";
  
  // function loadWeather() {
    $('button').click(function() {
      zip = $('#zip').val();
      alert(zip);
      // debugger;
    });

  
    if (zip === "") { zip = "84653"; }  
  // }
  
  
  loadWeather();
  console.log(zip);
  debugger;

  var conditionsPath = "http://api.wunderground.com/api/5d942397e92591f2/conditions/q/CA/" + zip + ".json";
  var forecastPath = "http://api.wunderground.com/api/5d942397e92591f2/forecast/q/CA/" + zip + ".json";
  $.ajax({
    url: conditionsPath,
    type: "GET",
    success: function(response) {
      $('#location').html(response.current_observation.display_location.full);
      $('#weather').html(response.current_observation.weather);
      $('#temperature').html(response.current_observation.temp_c); 
    }
  });

  $.ajax({
    url: forecastPath,
    type: "GET",
    success: function(response) {
      console.log(response);
      $('#desc').html(response.forecast.txt_forecast.forecastday[0].fcttext);
      // day1 forecast

      $('#r1c1').html(response.forecast.simpleforecast.forecastday[1].date.weekday);
      $('#r1c3').html(response.forecast.simpleforecast.forecastday[1].high.celsius + "°C");
      $('#r1c4').html(response.forecast.simpleforecast.forecastday[1].low.celsius + "°C");
      var imagePath1 = response.forecast.simpleforecast.forecastday[1].icon_url;
      $('#r1c2').attr("src", imagePath1);

      // day2 forecast
      $('#r2c1').html(response.forecast.simpleforecast.forecastday[2].date.weekday);
      $('#r2c3').html(response.forecast.simpleforecast.forecastday[2].high.celsius + "°C");
      $('#r2c4').html(response.forecast.simpleforecast.forecastday[2].low.celsius + "°C");
      var imagePath2 = response.forecast.simpleforecast.forecastday[2].icon_url;
      $('#r2c2').attr("src", imagePath2);

      // day3 forecast
      $('#r3c1').html(response.forecast.simpleforecast.forecastday[3].date.weekday);
      $('#r3c3').html(response.forecast.simpleforecast.forecastday[3].high.celsius + "°C");
      $('#r3c4').html(response.forecast.simpleforecast.forecastday[3].low.celsius + "°C");
      var imagePath3 = response.forecast.simpleforecast.forecastday[3].icon_url;
      $('#r3c2').attr("src", imagePath3);
    }
  });

  

});
// loadWeather();

