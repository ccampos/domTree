define([
	'router', // Request router.js
	'domTree',
	'svg'
], function(Router, Tree, Svg) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();

		// create tree
		var el = $('div');
		var data = Tree.createBranch(el);

		// run svg initialize
		Svg.initialize();
		// display SVG tree and pass branch data
		Svg.displaySVGtree(data);
	};

	return {
		initialize: initialize
	};
});