'use strict';

var stampit = require('stampit'),
	entity = require('./entity.js'),

	/**
	 * exit - create a new room exit
	 * @param  {String} options.command     
	 * @param  {String} options.roomId      
	 * @param  {String} options.name        [description]
	 * @param  {String} options.description [description]
	 * @return {Object}             this (for chaining)
	 */
	exit = function exit(command, roomId, name, description) {
		this.exits[command] = stampit({
			name: name,
			description: description
		});
		return this;
	},
	look: function look() {
		return this.name + '\n\n' +
		this.description + '\n\n' +
		this.players + '\n\n' +
		this.exits;
	},
	getId: function getId() {
		return this.id;
	}
	};

module.exports = stampit.compose(entity,
	stampit()
		.methods({
			exit: exit,
			look: look
		})
		.state({
			exits: [],
			players: []
		})
);
