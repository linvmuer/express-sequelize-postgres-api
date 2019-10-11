const model=require('../models/index');


exports.leave_get_all=function(req, res, next) {
  model.leaveappf.findAll({})
      .then( (leave)=>{
        return res.json({
          error: false,
          data: leave,
        });
      })
      .catch((error)=>res.json({
        error: true,
        data: [],
        error: error,

      }));
};

exports.create_leave=function(req, res, next) {
  const {
    name,
   supervisorName,
   departmentName,
  leaveType,
  leaveDate,
   returnDate,
    attachment,
    dateFiled,
  lineManAppr,
  hrAppr,
   empId,

  }=req.body;
  model.leaveappf.create({
    name: name,
    supervisor_name: supervisorName,
    department_name: departmentName,
    leave_type: leaveType,
    leave_date: leaveDate,
    return_date: returnDate,
    attachment: attachment,
    dateFiled: dateFiled,
    line_man_appr: lineManAppr,
    hr_appr: hrAppr,
    emp_id: empId,
  })
      .then((leave)=>res.status(201).json({
        error: false,
        data: leave,
        message: 'you have posted a leave request successfuly.',
      }))
      .catch((error)=>res.json({
        error: true,
        data: [],
        error: error,
      }));
};

exports.linemgr_approve=function(req, res, next) {

  // const lineMgr=req.params.linemgr;
  // will have to check the validid of the line manager
  const leaveId=req.params.id;
  const lineman = req.body.lineman;

  model.leaveappf.update({
    line_man_appr: lineman,
  }, {
    where: {
      id: leaveId,
    },
  })
      .then((leave) => res.json({
        error: false,
        message: `leave request has been updated.${leave}`,

      }))
      .catch((error) => res.json({
        error: true,
        error: error,
      }));
};

exports.hrmgr_approve=function(req, res, next) {
  const leaveId = req.params.id;
  // const hrMgr=req.params.hrmgr;
  // will have to check the validid of the line manager
  const hrmgrValue = req.body.hrmgrValue;

  model.leaveappf.update({
    hr_appr: hrmgrValue,
  }, {
    where: {
      id: leaveId,
    },
  })
      .then((leave) => res.json({
        error: false,
        message: `leave request has been updated.${leave}`,

      }))
      .catch((error) => res.json({
        error: true,
        error: error,
      }));
};
