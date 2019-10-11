const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const model = require('../models/index');
const checkAuth=require('../middleware/check-auth');
const LeaveController=require('../controllers/leaveappf');
/* GET all leave applications listing. */
router.get('/', checkAuth, LeaveController.leave_get_all);


/* POST leave application request. */
router.post('/',checkAuth, LeaveController.create_leave);


/* update todo. */ // will see the details later to approve the leave
// request
// line manager approving
// curl -X PUT -H "Content-Type: application/json" -d '{"lineman":"19"}' "http://localhost:3000/leave/line/1"
router.put('/line/:id', checkAuth,LeaveController.linemgr_approve);

// HR manager approving
router.put('/hrapp/:id', checkAuth,LeaveController.hrmgr_approve);


/* GET todo listing. */
router.delete('/:id', function(req, res, next) {

});

module.exports = router;
