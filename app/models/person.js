var Person = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string')
});

Person.FIXTURES = [
	{
		id: 1, 
		firstName: 'Hassan',
		lastName : 'Abdel-Rahman',
		email: 'hassan.abdelrahman@mhelabs.com'
	},
	{
		id: 2, 
		firstName: 'Vineet',
		lastName : 'Sinha',
		email: 'vineet.sinha@mhelabs.com'
	}
];

export default Person;