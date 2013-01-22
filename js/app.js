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
		var data = Tree.createBranch(el);

		// run SVG initialize and bind to .run
		$('svg.circles').hide();

		// display SVG circles on click
		var clickCounterCircles = 0;
		$('button.runCircles').click(function() {
			if (clickCounterCircles === 0) {
				Svg.displayCircles();			
				$('svg.circles').show();
			} else {
				Svg.displayCircles();
			};
			clickCounterCircles += 1;
		});

		// display SVG tree and pass branch data
		Svg.displaySVGtree(data);		

		// display SVG bar chart on click
		$('svg.barChart').hide();

		var clickCounterBarChart = 0;
		$('button.runBarChart').click(function() {
			if (clickCounterBarChart === 0) {
				Svg.displayBarChart();			
				$('svg.barChart').show();
			} else {
				Svg.displayBarChart();
			};
			clickCounterBarChart += 1;
		});
	};

	return {
		initialize: initialize
	};
});