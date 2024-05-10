const router = require('express').Router();
const accountHolderCtrl = require('../controllers/accountHolder');

router
.route('/')
.get(accountHolderCtrl.list)
.post(accountHolderCtrl.create)

router.route('/:id')
.get(accountHolderCtrl.read)
.put(accountHolderCtrl.update)
.patch(accountHolderCtrl.update)
.delete(accountHolderCtrl.delete)


module.exports = router;