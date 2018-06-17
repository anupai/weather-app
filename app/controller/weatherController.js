"use strict";

weatherApp.controller('WeatherController', ['weatherService', function (weatherService) {
        var vm = this;
        vm.city = "";
        vm.cityData = [];

        vm.getCityWeather = function () {
                weatherService.getCityWeather(vm.city).then(function (response) {
                        if (response && response.status == 200) {
                                vm.cityData.push({
                                        city: response.data.name,
                                        temperature: (response.data.main.temp-273.15).toFixed(2),
                                        condition: response.data.weather[0].main
                                });
                                vm.city = "";
                        }
                })
                        .catch(function (error) {
                                console.log("error occured :", error);
                        });
        }
}]);