var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService) {

	$scope.postData = function() {
		parseService.sendQuestion($scope.studentQuestion)
		$scope.studentQuestion = '';
	}

	$scope.getParseData = function() {
		parseService.getQuestion()
		.then(function(data) {
			$scope.questions = data;
		})
		console.log($scope.questions);
	}
	$scope.getParseData();

	$scope.changeStatus = function(question) {
		parseService.updateQuestion(question)
		.then(function(data) {
			$scope.getParseData();
		})
	}

	$scope.deleteParseData = function(question) {
		parseService.deleteQuestion(question)
		.then(function(data) {
			$scope.getParseData();
		})
	}

})