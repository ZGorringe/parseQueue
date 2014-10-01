var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function() {
	return {
		request: function(config) {
			config.headers = {'X-Parse-Application-Id': '4UulUGBft3cBroM7QYYhHREt9Zpl5bkpxlynJblb', 'X-Parse-REST-API-Key': 'uvhwdU4Wa8TN7cBCoIMFKZP5oVpV2TK2xxQ3BmTN'}
			return config;
		}
	};
});