const {Schema, model} = require('mongoose')

const accountHolderSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    DateOfBirth: {
        type: Date
    },
    mobileNumber:{
        type: String,
        minLength: 10,
        match: [/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, 'Invalid phone number'],
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        maxLength: 2,
        required: true
    },
    zipcode:{
        type: String,
        maxLength: 5,
        required: true
    },
    createdUserId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {timestamp: true})


module.exports = model('accountHolder', accountHolderSchema)
