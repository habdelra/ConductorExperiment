Conductor.require('/vendor/jquery/jquery.js');
Conductor.requireCSS('/cards/card1.css');

Conductor.card({



	metadata : {
		test : function(){
			return {
				foo: 'bar'
			};
		}
	},

	activate: function() {
		// conductor does auto DOM observing for setting the dimensions. if you need to manipulate the DOM explicitely, then you need to disable this
		//this.consumers.height.autoUpdate = false;
	},

	render: function(intent, dimensions) {
		var that = this,
			$container = this.getContainerDiv();

		//$body.text('hello world!');
		if (this.data && this.data.person && this.data.person.name) $container.append($('<div/>').text('render: ' + this.data.person.name));
		this.consumers.xhr.request('get', '/data.json').then(function(responseBody){
			var responseObj = JSON.parse(responseBody);
			$container.append($('<div/>').text(responseObj.name));
			that.consumers.height.update({
				width: 200,
				height: 200
			});
		}, function(err){
			//console.log(err);
		});



	},

	didUpdateData : function(name, data){
		var $container = this.getContainerDiv();
		if (name === '*' && data.person ){
			$container.append($('<div/>').text('UpdateData: ' + data.person.name || 'none'));
		}
	},

	getContainerDiv : function(){
		var $body = $('body'),
			$container = $body.find('.container');

		if (!$container.length) {
			$container = $('<div class="container"/>');
			$body.append($container);
		}
		return $container;
	}
});