var stampit = require('stampit'),
	cuid = require('cuid');

module.exports = stampit()
	.state({
		name: 'Nothing',
		description: 'There\'s nothing to look at.'
	})
	.enclose({
		this.id = cuid();
	});
