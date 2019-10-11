const model=require('../models/index');

exports.get_training_schedules=async(req,res,next)=>{
  const training_schedule=await model.training_schedule.findAll({});
  return res.json({
    error:false,
    data:training_schedule
  })
};

exports.get_training_schedule=async(req,res,next)=>{
  const training_id=req.params.id;
  const training_schedule=await model.training_schedule.findOne({
    where:{
      id:training_id
    }
  });
  return res.status(200).json({
    error:false,
    data:training_schedule
  });
};

exports.create_training_schedule=async(req,res,next)=>{
  const {training_name,
         start_date,
         end_date,
         attachment}=req.body;
  const training_schedule=await model.training_schedule.create({
           training_name,
           start_date,
           end_date,
           attachment
  });
  return res.json({
    error:false,
    data:training_schedule
  });

};

exports.update_training_schedule=async(req,res,next)=>{
  const training_schedule_id=req.params.id
  const {training_name,
         start_date,
         end_date,
         attachment}=req.body;
  const training_schedule=await model.training_schedule.update({
    training_name,
           start_date,
           end_date,
           attachment
  }, {
    where: {
      id: training_schedule_id,
    },
  });
  return res.status(200).json({
    error:false,
    message:'successfuly updated schedule with id '+training_schedule_id
  })
};

exports.delete_training_schedule=async(req,res,next)=>{
    const training_id=req.params.id;

    const training_schedule=await model.training_schedule.destroy({
      where:{
        id:training_id
      }
    });

    return res.status(200).json({
      error:false,
      message:'successfuly deleted training with id '+training_id
    })
};
