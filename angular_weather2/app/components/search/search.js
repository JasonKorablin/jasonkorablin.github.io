angular.module('search', []);

angular.module('search').controller('searchCtrl', ['$scope', 'SearchResult', function ($scope, SearchResult) {

	$scope.temp = '';

	$scope.addSearch = function(){
		SearchResult.add($scope.temp);

	}

	$scope.enterSearch = function(){

		SearchResult.updateSearch($scope.temp);

	}
	
	

	
}]);