
var Pane = DS.Model.extend({
	url: DS.attr('string')
});

Pane.FIXTURES = [
	{id: 1, url: '/cards/card1.js'}
];

export default Pane;