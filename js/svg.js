define(function() {
	var initialize = function() {
		// initialize and set svg and svg attributes
		var svg = d3.select('svg');
		var svgWidth = 600;
		var svgHeight = 250;

		svg.attr('height', svgHeight);
		svg.attr('width', svgWidth);

		// set svg width and height

		// initialize circles
		var circles = svg.selectAll('circle');

		// set circles attributes and transitions
		var radius = 12;
		var margin = radius * 1.5;
		var duration = 2000;

		circles
			.attr('cx', function() {
				return (Math.random() * (svgWidth - (margin * 2)) + margin);
			})
			.attr('cy', function() {
				return (Math.random() * (svgHeight - (margin * 2)) + margin);
			})
			.transition().duration(Math.random() * duration)
				.style('fill', 'steelblue')
			.transition().duration(Math.random() * duration)
				.attr('cx', function() {
			  		return (Math.random() * (svgWidth - (margin * 2)) + margin);
				})
				.attr('cy', function() {
					return (Math.random() * (svgHeight - (margin * 2)) + margin);
				})
			.transition().duration(Math.random() * duration)
				.style('fill', 'red')
			.transition().duration(Math.random() * duration)
				.attr('cx', function() {
			  		return (Math.random() * (svgWidth - (margin * 2)) + margin);
				})
				.attr('cy', function() {
					return (Math.random() * (svgHeight - (margin * 2)) + margin);
				});
	};

	var displaySVGtree = function(data) {

	};

	return {
		initialize: initialize,
		displaySVGtree: displaySVGtree
	};
});