angular.module('app').factory('SearchResult', ['WeatherFactory',  function(WeatherFactory) {

	var searchResult = '';
	var zip = '17601';

	return {

		getZip: function(){
			return zip;
		},

		getSearch: function(){
			return searchResult;
		},

		add: function(input){
			searchResult = input;

		},

		updateSearch: function(input){
			if(!isNaN(input) && input.length == 5){
				searchResult = input;
				WeatherFactory.updateZip(input);
			}
			else{
				alert('Please enter a valid zip code');
			}

		}

	}

}]);
