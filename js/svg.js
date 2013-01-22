define(function() {
	var displayCircles = function() {
		// initialize and set svg and svg attributes
		var svg = d3.select('svg.circles');
		var svgHeight = 250;
		var svgWidth = 550;

		// set svg width and height
		svg.attr('height', svgHeight);
		svg.attr('width', svgWidth);

		// initialize circles
		var circles = svg.selectAll('circle');

		// set circles attributes and transitions
		var radius = 7;
		var margin = radius * 1.5;
		var duration = 2000;

		circles
			.attr('r', radius)
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
		var svg = d3.select('svg.branch');
		var svgHeight = 200;
		var svgWidth = 800;

		svg.attr('height', svgHeight);
		svg.attr('width', svgWidth);
	};

	var displayBarChart = function() {
		var svg = d3.select('svg.barChart');

		// create data array
		var data = [
			{ year: 2009, books: makeRandomNbr(100) },
			{ year: 2010, books: makeRandomNbr(100) },
			{ year: 2011, books: makeRandomNbr(100) },
			{ year: 2012, books: makeRandomNbr(100) },
			{ year: 2013, books: makeRandomNbr(100) }
		];

		// set bar chart width
		var barWidth = 40;

		// set svg height and width
		var svgHeight = 200;
		var svgWidth = (barWidth + 10) * data.length;

		svg.attr('height', svgHeight);
		svg.attr('width', svgWidth);

		// set x and y scales
		var xScale = d3.scale.linear()
		.domain([0, data.length]) // data minimum and maximum
		.range([0, svgWidth]); // the pixels to map to, e.g., the width of the diagram

		var yScale = d3.scale.linear()
		.domain([0, d3.max(data, function(datum) { return datum.books; })])
		.rangeRound([0, svgHeight]);

		// add bars
		svg.selectAll('rect')
			.data(data)
			.enter()
			.append('svg:rect')
			.attr('x', function(datum, index) { return xScale(index); })
			.attr('y', function(datum) { return svgHeight - yScale(datum.books); })
			.attr('height', function(datum) { return yScale(datum.books); })
			.attr('width', barWidth)
			.attr('fill', '#2d578b');

		// add text
		svg.selectAll('text')
			.data(data)
			.enter()
			.append('svg:text')
			.attr('x', function(datum, index) { return xScale(index) + + barWidth; })
			.attr('y', function(datum) { return svgHeight - yScale(datum.books); })
			.attr('dx', -barWidth/2)
			.attr('dy', '1.2em')
			.attr('text-anchor', 'middle')
			.text(function(datum) { return datum.books; })
			.attr('fill', 'white');

		svg.selectAll('text.yAxis')
			.data(data)
			.enter().append('svg:text')
			.attr('x', function(datum, index) { return xScale(index) + barWidth; })
			.attr('y', svgHeight)
			.attr('dx', -barWidth/2)
			.attr('text-anchor', 'middle')
			.attr('style', 'font-size: 12; font-family: Helvetica, sans-serif')
			.text(function(datum) { return datum.year; })
			.attr('transform', 'translate(0, 18)')
			.attr('class', 'yAxis');
	};

	function makeRandomNbr(limit) {
		return Math.round(Math.random() * limit);
	};

	return {
		displayCircles: displayCircles,
		displaySVGtree: displaySVGtree,
		displayBarChart: displayBarChart
	};
});