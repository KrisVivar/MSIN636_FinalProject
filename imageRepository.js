const router = require('express').Router();
const imageRepositoryCtrl = require('../controllers/imageRepository');

const {isStaffOrAdmin} = require('../middlewares/auth')
router.use(isStaffOrAdmin);

router
.route('/')
.get(imageRepositoryCtrl.list)
.post(imageRepositoryCtrl.create)

router.route('/:id')
.get(imageRepositoryCtrl.read)
.put(imageRepositoryCtrl.update)
.patch(imageRepositoryCtrl.update)
.delete(imageRepositoryCtrl.delete)


module.exports = router;