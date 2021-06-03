const Todo = require('../models/Todo');

function getController(req, res) {
	Todo.find()
		.then(result => res.status(200).json(result))
		.catch(err => res.status(400).json(err.message));
}

function getByIdController(req, res) {
	const id = req.params.id;
	Todo.findById(id)
		.then(result => res.status(200).json(result))
		.catch(err => res.status(400).json(err.message));
}

function postController(req, res) {
	const { description } = req.body;
	const newTodoInput = { description };
	const newTodo = new Todo(newTodoInput);
	newTodo
		.save()
		.then(result => res.status(200).json(result))
		.catch(err => res.status(400).json(err.message));
}

function updateController(req, res) {
	const updatedTodo = req.body;

	Todo.findByIdAndUpdate(updatedTodo._id, updatedTodo)
		.then(result => res.status(200).json(result))
		.catch(err => res.status(400).json(err.message));
}

function deleteController(req, res) {
	Todo.deleteMany()
		.then(() => res.status(200))
		.catch(err => res.status(400).json(err.message));
}

function deleteByIdController(req, res) {
	const id = req.params.id;

	Todo.findByIdAndDelete(id)
		.then(result => res.status(200).json(result))
		.catch(err => res.status(400).json(err.message));
}

module.exports = {
	getController,
	getByIdController,
	postController,
	updateController,
	deleteController,
	deleteByIdController,
};
