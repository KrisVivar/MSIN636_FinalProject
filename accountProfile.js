const router = require('express').Router();
const accountProfileCtrl = require('../controllers/accountProfile');

const {isStaffOrAdmin} = require('../middlewares/auth')
router.use(isStaffOrAdmin);

router
.route('/')
.get(accountProfileCtrl.list)
.post(accountProfileCtrl.create)

router.route('/:id')
.get(accountProfileCtrl.read)
.put(accountProfileCtrl.update)
.patch(accountProfileCtrl.update)
.delete(accountProfileCtrl.delete)

module.exports = router;