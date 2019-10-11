

var express=require('express');
var router=express.Router();
var model=require('../models/index');
const checkAuth=require('../middleware/check-auth');
const NotificationController=require('../controllers/notifications');
/*GET notification listing . */

router.get('/',checkAuth,NotificationController.get_notifications);

/* POST notification. */
router.post('/',checkAuth, NotificationController.post_notification);


/* update notification. */
//test command
//curl -X PUT -H "Content-Type: application/json" -d '{"title":"create a rest client","description":"create it with node js"}' "http://localhost:3000/todos/1"

router.put('/:id', checkAuth,NotificationController.update_Notification);

/* GET todo notification . */
router.delete('/:id', checkAuth,NotificationController.delete_notification);

module.exports = router;
