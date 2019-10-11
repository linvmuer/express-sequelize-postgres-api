const model=require('../models/index');

exports.get_all_travel_requets=(req,res,next)=>{
  const travelOrders=await model.travel.findAll({});
  return res.json({
    error:false,
    data:travelOrders
  });
};

exports.create_travel_request=(req,res,next)=>{
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
};

exports.line_man_approval=(req,res,next)=>{
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
};

exports.hr_man_approval=(req,res,next)=>{
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
};
