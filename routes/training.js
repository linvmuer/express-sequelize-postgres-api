const express = require('express');
const router = express.Router();
const model = require('../models/index');
const checkAuth=require('../middleware/check-auth');
const TrainingController=require('../controllers/training');

//middleware to hanlde errors
const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

/* GET training listing. */
router.get('/',checkAuth,TrainingController.get_training_schedules);

// get single training schedule by id
router.get('/:id',checkAuth,TrainingController.get_training_schedule);

/* POST training schedule. */
router.post('/',checkAuth,TrainingController.create_training_schedule);


/* update a training. */
router.put('/:id', TrainingController.update_training_schedule);


/* GET todo listing. */
router.delete('/:id',TrainingController.delete_training_schedule);

module.exports = router;
