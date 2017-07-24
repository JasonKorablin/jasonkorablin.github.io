angular
	.module('weather', []);

angular.module('weather').controller("weatherController", ['$scope', 'WeatherFactory', 'SearchResult', function($scope, WeatherFactory, SearchResult) {

	WeatherFactory.displayTemp()
	.then(function(result) {
		$scope.temp = result;
	});

	WeatherFactory.displayWeather()
	.then(function(result) {
		$scope.weather = result;
	});

	WeatherFactory.displayCity()
	.then(function(result) {
		$scope.city = result;
	});

	WeatherFactory.displayPressure()
	.then(function(result) {
		$scope.pressure = result;
	});

	WeatherFactory.displayHumidity()
	.then(function(result) {
		$scope.humidity = result;
	});

	WeatherFactory.displayMax()
	.then(function(result) {
		$scope.maxtemp = result;
	});

	WeatherFactory.displayMin()
	.then(function(result) {
		$scope.mintemp = result;
	});

	WeatherFactory.displayWind()
	.then(function(result) {
		$scope.windspeed = result;
	});

	$scope.date = new Date();

	$scope.SearchResult = SearchResult;

}]);
