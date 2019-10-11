const model=require('../models/index');

exports.get_notifications=function(req,res,next){
  model.Notification.findAll({})
      .then(notification=>res.json({
        error:false,
        data:notification
      }))
      .catch(error=>res.json({
        error:true,
        data:[],
        error:error

      }))
};

exports.post_notification=function(req, res, next) {
  const {
    name,
    description,
    dateCreated,
    sender
  }=req.body;
  model.Notification.create({
    name:name,
    description:description,
    dateCreated:dateCreated,
    sender:sender
  })
  .then(notification=>res.status(201).json({
    error:false,
    data:notification,
    message:'New notification has been created.'
  }))
  .catch(error=>res.join({
    error:true,
    data:[],
    error:error
  }))
};


exports.update_Notification=function(req, res, next) {
  const notification_id = req.params.id;

  const {
    name,
    description,
    dateCreated,
    sender
  }=req.body;

  model.Notification.update({
    name:name,
    description:description,
    dateCreated:dateCreated,
    sender:sender
      }, {
          where: {
              id: notification_id
          }
      })
      .then(notification => res.json({
          error: false,
          message: 'notification has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
};


exports.delete_notification=function(req, res, next) {
  const notification_id = req.params.id;

   model.Todo.destroy({ where: {
       id: notification_id
   }})
       .then(status => res.json({
           error: false,
           message: 'notification has been deleted.'
       }))
       .catch(error => res.json({
           error: true,
           error: error
       }));
};
