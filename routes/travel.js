
var express=require('express');
var router=express.Router();
var model=require('../models/index');
const checkAuth=require('../middleware/check-auth');

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
router.get('/',checkAuth,
    awaitErorrHandlerFactory(async(req,res,next)=>{
      const travelOrders=await model.travel.findAll({});
      return res.json({
        error:false,
        data:travelOrders
      });
    })
);


/* POST travel order request. */
router.post('/',checkAuth,
  awaitErorrHandlerFactory(async(req,res,next)=>{
    const {
      event_name,
      event_type,
      venue,
      travel_date,
      return_date,
      transport_cost,
      boarding_cost,
      other_cost,
      line_man_appr,
      hr_approval,
      emp_name,
      emp_id
    }=req.body;
    const travelOrder=model.travel.create({
      event_name,
      event_type,
      venue,
      travel_date,
      return_date,
      transport_cost,
      boarding_cost,
      other_cost,
      line_man_appr,
      hr_approval,
      emp_name,
      emp_id
    });
    return res.status(201).json({
      error:false,
      data:travelOrder,
      message:"New travel order has been created."
    })
  })
);


/* update status of travel order must be to update the status from pending to approved */
router.put('/line/:id/:linemgr',
checkAuth,
awaitErorrHandlerFactory(async(req,res,next)=>{
  const travel_id = req.params.id;
  const linemgr=req.params.linemgr;
  //will have to check the validid of the line manager
  //we also have to query from the database if the particular user has the submitted line manager as his/her
  const { lineman} = req.body;
  model.travel.update(
    {
      line_man_appr:lineman,
    },
    {
        where: {
            id: travel_id
        }
    }
  );

  return res.status(201).json({
    error:false,
    message:"travel request has been updated line_man_appr field"
  });
})
);
//hr approval
router.put('/hrapp/:id/:hrmgr',checkAuth,
   awaitErorrHandlerFactory(async(req,res,next)=>{
     const travel_id = req.params.id;
     const hrmgr=req.params.hrmgr;//use this to test the validity of the manager
     const { updateValue} = req.body;
     model.travel.update({
       hr_approval:updateValue,
         }, {
             where: {
                 id: travel_id
             }
         });
         return res.status(201).json({
           error:false,
           message:"travel order has been updated"
         });
   })
);
/* GET specific travel order br its id. */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
