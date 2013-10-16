Conductor.require('/vendor/jquery/jquery.js');
Conductor.requireCSS('/cards/card1.css');

Conductor.card({

	activate: function() {
	},

	render: function(intent, dimensions) {
		var $body = $('body');
		$body.text('hello world!');
		this.consumers.xhr.request('get', '/data.json').then(function(responseBody){
			var responseObj = JSON.parse(responseBody);
			$body.append($('<div/>').text(responseObj.name));
		}, function(err){
			debugger;
			console.log(err);
		});

	}
});