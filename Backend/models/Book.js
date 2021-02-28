const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
	{
		image: {
			type: String,
			required : true
		},
		name: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		year: {
			type: Number,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		chapters: {
			type: Array,
			required: true
		}
	},
	{ versionKey: false }
);

module.exports = mongoose.model('Book', bookSchema);
