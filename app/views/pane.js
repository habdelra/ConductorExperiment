import Conductor from "conductor";

var PaneView = Ember.View.extend({

	didInsertElement: function() {
		console.log('card url: ' + this.get('controller.url'));

		var conductor = new Conductor({
			conductorURL: '/vendor/conductor.js.html'
		});

		// conductor.loadData(this.get('controller.url'), this.get('controller.id'), {
		// 	name: 'Hassan'
		// });
		var url = this.get('controller.url'),
			id = this.get('controller.id');
		$.getJSON('/data2.json').then(function(response){
			setTimeout(function(){
				conductor.loadData(url, id, response);
			},1000);
		});
		conductor.loadData(url, id, {
			"person" : {
				"name": 'Luke'
			}
		});

		var card = conductor.load(url, id);

		card.appendTo(this.get('element')).
            then(function(card) {
              card.render();

                //card needs to be activated before we can get metadata. which it will be by the time the appendTo promise resolves
                card.metadataFor('test').then(function(metadata) {
                    console.log('metadata.foo:' + metadata.foo);
                });

              return card;
          }).fail(Ember.RSVP.rethrow);

       

        

	}

});

export default PaneView;