/*
Jason Korablin
Statistics Board: JavaScript
This is the JavaScript code needed to implement the Statistics Board.
*/

/* 
Instantiating the Statistics Board module
YOU MUST PLACE YOUR NG-APP NAME IN THE LINE BELOW THAT READS 'PLACE YOUR NG-APP NAME HERE'.
*/

	/* Directive: Displays an instance of the single number statistic panels | Can be called by using <div stat-box></div> OR <stat-box></stat-box>*/
	angular.module('weather').directive('statBox', function() {
		return {
			/* Allows directive to be delcared as either an attribute to a <div> or as an element */
			restrict: 'EA', 
			/* Template of HTML code that will be injected when called */
			template: '<p class="psk_ext-animatedstatistics-statisticheader">Weather</p> <p class="psk_ext-animatedstatistics-statvalue">{{ weather }}</p> <p class="psk_ext-animatedstatistics-date">{{date | date:"MMMM d, y"}}</p>'
		};
	});
	
	angular.module('weather').directive('statBox2', function() {
		return {
			/* Allows directive to be delcared as either an attribute to a <div> or as an element */
			restrict: 'EA', 
			/* Template of HTML code that will be injected when called */
			template: '<p class="psk_ext-animatedstatistics-statisticheader">Temperature</p> <p class="psk_ext-animatedstatistics-statvalue">{{ temp }}</p> <p class="psk_ext-animatedstatistics-date">{{date | date:"MMMM d, y"}}</p>'
		};
	});

	/* Directive: Displays an instance of the statistics table | Can be called by using <div table-box></div> OR <table-box></table-box> */
	angular.module('weather').directive('tableBox', function() {
		return {
			/* Allows directive to be delcared as either an attribute to a <div> or as an element */
			restrict: 'EA',
			/* Template of HTML code that will be injected when called */
			template: '<p class="psk_ext-animatedstatistics-statisticheader">{{ fields[$index].name }}</p>  <div class="psk_ext-animatedstatistics-row">  	  	<h4>{{ fields[$index].field[0].fieldName }}</h4> 	 	<h4>{{ fields[$index].field[0].fieldValue }}</h4>  	</div> <div ng-repeat = "x in fields[$index].field" class="psk_ext-animatedstatistics-row">  	  	<p>{{ fields[$parent.$index].field[$index+1].fieldName }}</p> 	 	<p>{{ fields[$parent.$index].field[$index+1].fieldValue }}</p>  	</div>'
		};
	});  

/* Setting up the controller for the Statistics Board Module */
angular.module('weather').controller('statcontroller', ['$scope', function ($scope) {
    
	
    
}]);