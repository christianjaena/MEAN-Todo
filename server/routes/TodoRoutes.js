const express = require('express');
const route = express.Router();

const {
	getController,
	getByIdController,
	postController,
	updateController,
	deleteController,
	deleteByIdController,
} = require('../controllers/TodoControllers.js');

route.get('/todos', getController);

route.get('/todos/:id', getByIdController);

route.post('/todos', postController);

route.put('/todos/:id', updateController);

route.delete('/todos', deleteController);

route.delete('/todos/:id', deleteByIdController);

module.exports = route;
