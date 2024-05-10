const {generate, verify} = require('../utils/generateToken');
const User = require('../models/User');
const errorResponse = require('../utils/errorResponse');

//URL : /auth/login
exports.login = async(req, res)=>{
    const {username, password} = req.body

    if(!(username && password))
        throw new errorResponse(401, 'Please enter a valid username or password');
    //Get the user information
    const user = await User.findOne({username})
    //No user with that username
    if(!user) throw new errorResponse(401, 'The information you entered does not match our records');
    //Check the password
    const isMatch = await user.matchPassword(password)
    //Password is incorrect
    if(!isMatch) throw new errorResponse(401, 'The information you entered does not match our records');
    //Check if the account is active
    if(!user.isActive) throw new errorResponse(401, 'This account is not active');

    res.status(200).json({
        success: true,
        token: generate({userId: user._id})
    })
}


//URL : /auth/logout
exports.logout = (req, res)=>{
    res.status(200).json({
        success: true,
        message: "No further action needed to logout. Delete the token from your browser data"
    })
}