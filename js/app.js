define([
	'router', // Request router.js
	'domTree',
	'svg'
], function(Router, Tree, Svg) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();

		// create tree
		var el = $('html');
		Tree.createTree(el);

		// run svg
		Svg.initialize();
	};

	return {
		initialize: initialize
	};
});