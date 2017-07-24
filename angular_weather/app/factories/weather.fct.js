angular.module('app').factory('WeatherFactory', ['$http', '$q', function($http, $q) {

	var temp,
	weather,
	date,
	humidity,
	pressure,
	max,
	min,
	wind,
	promise;

	var weather_api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather';
	var weather_params = 'units=imperial&APPID=e66763c4c68c4ea508137dec95260b39';
	var zip = '17601';

	return {

		updateZip: function(input){
			zip = input;
		},

		displayTemp: function(input){
			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                temp = result.data.main.temp;
                return temp;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayHumidity: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                humidity = result.data.main.humidity;
                return humidity;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayPressure: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                pressure = result.data.main.pressure;
                return pressure;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayMax: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                max = result.data.main.temp_max;
                return max;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayMin: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                min = result.data.main.temp_min;
                return min;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayWind: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                wind = result.data.wind.speed;
                return wind;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayWeather: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                weather = result.data.weather[0].main;
                return weather;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		},

		displayCity: function(){

			promise = $http.get(weather_api + '?zip=' + zip +'&' + weather_params)
            .then(function(result) {
                date = result.data.name + ", " + result.data.sys.country;
                return date;
            }, function(result) {
                return $q.reject(result);
            });
			return promise;

		}

	}

}]);
