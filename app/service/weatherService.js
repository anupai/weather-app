"use strict";

weatherApp.factory('weatherService', ['$http', 'apiKey', function ($http, apiKey) {
    return {
        getCityWeather: function (city) {
            var data;
            return $http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&&APPID=${apiKey}`)
        }
    }
}])
