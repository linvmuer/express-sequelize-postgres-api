const express=require('express');
// eslint-disable-next-line new-cap
const router=express.Router();
const model=require('../models/index');
const checkAuth=require('../middleware/check-auth');
const TodoController=require('../controllers/todos')
router.get('/', checkAuth,TodoController.todo_get_all);

/* POST todo. */
// curl --data "title=create a rest client&description=create it with node js" http://localhost:3000/todos

router.post('/', checkAuth,TodoController.todo_post);


/* update todo. */
// same as the command in notifications.js
router.put('/:id', checkAuth,TodoController.todo_put);


/* GET todo listing. */
// command to delete curl -X "DELETE" http://localhost:3000/todos/1
router.delete('/:id',checkAuth, TodoController.todo_delete);

module.exports = router;
