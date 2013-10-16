import Conductor from 'conductor';

var PersonService = Conductor.Oasis.Service.extend({

	requests: {
		findByEmail : function(email){
			var store = this.container.lookup('store:main');
			return store.findAll('person').then(function(results){
				return results.filterBy('email', email).objectAt(0).serialize();
			});
		}
	}

});

export default PersonService;