define(function() {
	var initialize = function() {
		// initialize svg with d3
		var svg = d3.select('svg');

		// initialize circles
		var circles = svg.selectAll('circle');

		// set circles color to steelblue with transition
		circles
			.transition()
				.duration(750)
				.style('fill', 'steelblue')
			.transition()
				.duration(750)
				.attr('cx', function() {
			  return (Math.random() * 500 + 50);
			})
				.attr('cy', function() {
					return (Math.random() * 180 + 20);
				})
			.transition()
				.duration(750)
				.style('fill', 'red')
			.transition()
				.duration(750)
				.attr('cx', function() {
			  return (Math.random() * 500 + 50);
			})
				.attr('cy', function() {
					return (Math.random() * 180 + 20);
				});
	};

	return {
		initialize: initialize
	}
});