define([
	'router', // Request router.js
	'domTree'
], function(Router, Tree) {
	var initialize = function(){
		// Pass in our Route module and call it's initialize function
		Router.initialize();
	}

	var runTree = function() {
		// five levels deep using getChildren
		var el = $('form#componentFormId div.cel-tabs');
		var objTree = {};
		Tree.getChildren(el, objTree);
	}

	return {
		initialize: initialize,
		runTree: runTree
	};
});