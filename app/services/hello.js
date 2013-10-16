import Conductor from 'conductor';

var HelloService = Conductor.Oasis.Service.extend({

	requests: {

		hi: function() {
        	return Ember.RSVP.Promise(function(resolve, reject) {
        		setTimeout(function () {
		            resolve("hello");
        		}, 5000);
          });

		}

	}

});

export default HelloService;