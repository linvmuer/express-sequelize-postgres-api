
const express=require('express');
const router=express.Router();
const model=require('../models/index');
const checkAuth=require('../middleware/check-auth');
const TravelController=require('../controllers/travel');
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

/* GET travel order listing.All of them */
router.get('/',checkAuth,TravelController.get_all_travel_requets);


/* POST travel order request. */
router.post('/',checkAuth,TravelController.create_travel_request);


/* update status of travel order must be to update the status from pending to approved */
router.put('/line/:id/:linemgr',checkAuth,TravelController.line_man_approval);
//hr approval
router.put('/hrapp/:id/:hrmgr',checkAuth,TravelController.hr_man_approval);
/* GET specific travel order br its id. */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
