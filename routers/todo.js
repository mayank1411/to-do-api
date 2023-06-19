const express = require('express');
const router = express.Router();
const {
      getAllTodos,
      createTodo,
      getSingleTodo,
      updateTodo,
      deleteTodo
} = require('../controller/todo')


router.route('/').get(getAllTodos).post(createTodo);
router.route('/:id').get(getSingleTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;



