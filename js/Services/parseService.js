var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {

	this.sendQuestion = function(question) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/queue',
			data: {
				content: question,
				status: 'red'
			}
		})
	}

	this.updateQuestion = function(question) {
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/queue/' + question.objectId,
			data: {
				status: 'yellow'
			}
		})
	}

	this.getQuestion = function() {
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/queue?order=-createdAt'
		})
		.then(function(data) {
			return data.data.results;
		})
	}

	this.deleteQuestion = function(question) {
		return $http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/queue/' + question.objectId
		})
	}
})