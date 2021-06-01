const mongoose = require('mongoose');
const { Schema, model: Model } = mongoose;

const todoSchema = new Schema({
	description: {
		type: String,
		require: true,
	},
});

const Todo = Model('Todo', todoSchema)
module.exports = Todo;
