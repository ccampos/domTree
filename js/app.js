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

		// run SVG initialize and bind to .run
		Svg.initialize();
		$('button.run').click(function() { Svg.initialize() });
		// display SVG tree and pass branch data
		Svg.displaySVGtree(data);
		// display SVG bar chart
		Svg.displayBarChart();
	};

	return {
		initialize: initialize
	};
});