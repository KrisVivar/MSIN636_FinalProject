const router = require('express').Router();
const trailCtrl = require('../controllers/trail');

const {isStaffOrAdmin} = require('../middlewares/auth')
router.use(isStaffOrAdmin);

router
.route('/')
.get(trailCtrl.list)
.post(trailCtrl.create)

router.route('/:id')
.get(trailCtrl.read)
.put(trailCtrl.update)
.patch(trailCtrl.update)
.delete(trailCtrl.delete)


module.exports = router;