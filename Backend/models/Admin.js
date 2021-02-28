const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	name: {
		type: String,
		required: true,
		max: 200,
		min: 5
	},
	email: {
		type: String,
		required: true,
		max: 200,
		min: 6
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 6
	},
});

module.exports = mongoose.model('Admin', adminSchema);
