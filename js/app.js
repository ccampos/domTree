define([
	'router' // Request router.js
], function(Router) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();
	}

	return {
		initialize: initialize
	};
});