
var express=require('express');
var router=express.Router();
var model=require('../models/index');
const checkAuth=require('../middleware/check-auth');
const TodoTaskController=require('../controllers/todotask');



router.get('/',checkAuth,TodoTaskController.todotask_get_all);
router.get('/:id',checkAuth,TodoTaskController.todotask_get_one);
router.post('/',checkAuth,TodoTaskController.todotask_post);
router.put('/:id',checkAuth,TodoTaskController.todotask_update);
router.put('/:id',checkAuth,TodoTaskController.todotask_update_completion);

module.exports = router;
