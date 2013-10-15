import Conductor from "conductor";

var PaneView = Ember.View.extend({

	didInsertElement: function() {
		console.log('card url: ' + this.get('controller.url'));
		var card = new Conductor({
			conductorURL: '/vendor/conductor.js.html'
		}).load(this.get('controller.url'), this.get('controller.id'));

	    card.appendTo(this.get('element')).
	        then(function(card) {
	        	card.render();
	        	return card;
	        }).
	        fail(Ember.RSVP.rethrow);

	}

});

export default PaneView;