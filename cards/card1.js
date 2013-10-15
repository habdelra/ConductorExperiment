Conductor.require('/vendor/jquery/jquery.js');
Conductor.requireCSS('/cards/card1.css');

Conductor.card({
	activate: function() {
	},

	render: function(intent, dimensions) {
		$('body').text('hello world!');
		window.alert("Hello!");
	}
});