angular.module('weather').directive('weatherBoard', function(WeatherFactory) {
		return {
			restrict: 'A',
			templateUrl: 'app/components/weather/templates/weatherboard.html'
		};
});