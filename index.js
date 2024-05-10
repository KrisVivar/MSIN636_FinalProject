const router = require('express').Router()
const {auth} = require('../middlewares/auth')


// EndPoint : /api/auth
router.use('/auth', require('./auth'))

//Check for authentication
router.use(auth)

//EndPoint : /api/users
router.use('/users', require('./user'))

//EndPoint : /api/accountHolders
router.use('/accountHolders', require('./accountHolder'))

//EndPoint : /api/trails
router.use('/trails', require('./trail'))

//EndPoint : /api/accountProfiles
router.use('/accountProfiles', require('./accountProfile'))

//EndPoint : /api/imageRepository
router.use('/imageRepository', require('./imageRepository'))

module.exports = router;