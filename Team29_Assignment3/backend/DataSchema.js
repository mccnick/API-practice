const mongoose = require('mongoose');

// schema for rating
const ratingSchema = new mongoose.Schema({
	rate: { type: Number, required: true },
	count: { type: Number, required: true }
});

const dataSchema = new mongoose.Schema({
	id: Number, 
	title: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	image: String,
	rating: ratingSchema
});

module.exports = mongoose.model('Data', dataSchema, 'products');

