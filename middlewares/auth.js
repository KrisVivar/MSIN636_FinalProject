const User = require('../models/User');
const {verify} = require('../utils/generateToken');
const errorResponse = require('../utils/errorResponse');


//Authentication
exports.auth = async (req, res, next)=>{
    const auth = req.headers?.authorization || null;
    const accessToken = auth ? auth.split(" ")[1]:null;
    const userData = await verify(accessToken);
    // console.log(userId)

    const user = await User.findById(userData.userId);

    //Attach the user information to req
    req.user = user;

    //Add createdUserId for all req.body
    req.body.createdUserId = req.user?._id;
    next();
};


//Authorization Parameters
exports.isLogin = (req, res, next)=>{
    if(req.user) next();
    throw new errorResponse(403, 'Please login to your account')
}

exports.isAdmin = (req, res, next)=>{
    if(req.user.isAdmin) return next();
    throw new errorResponse(403, 'You must login as an Admin to Access')
}

exports.isStaffOrAdmin = (req, res, next)=>{
    if(req.user.isAdmin || req.user.isStaff) return next();
    throw new errorResponse(403, 'You must login as a Staff or an Admin to Access')
}