Conductor.require('/vendor/jquery/jquery.js');
Conductor.requireCSS('/cards/card1.css');

Conductor.card({

	activate: function() {
	},

	render: function(intent, dimensions) {
		var $body = $('body');
		//$body.text('hello world!');
		if (this.data && this.data.person && this.data.person.name) $body.append($('<div/>').text('render: ' + this.data.person.name));
		this.consumers.xhr.request('get', '/data.json').then(function(responseBody){
			var responseObj = JSON.parse(responseBody);
			$body.append($('<div/>').text(responseObj.name));
		}, function(err){
			console.log(err);
		});

	},

	didUpdateData : function(name, data){
		var $body;
		if (name === '*' && data.person ){
			$body = $('body');
			$body.append($('<div/>').text('UpdateData: ' + data.person.name || 'none'));
		}
	}
});