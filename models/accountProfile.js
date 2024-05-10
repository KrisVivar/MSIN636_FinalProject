const {Schema, model} = require('mongoose')

const accountProfileSchema = new Schema({
    imgTrailId: {
        type: Schema.Types.ObjectId,
        ref: 'imageRepository',
        required: true
    },    
    favoriteTrailId: {
        type: Schema.Types.ObjectId,
        ref: 'trail',
        required: true
    },
    trailName: {
        type: Schema.Types.String,
        ref: 'trail',
        required: true
    },
    accountHolder: {
        type: Schema.Types.ObjectId,
        ref: 'accountHolder',
        required: true
    },
    createdUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    completedTrails: {
        type: Number, 
        trim: true
    },
    memberSince: { 
        type: Date,
    },  
}, {timestamp: true})

module.exports = model('accountProfile', accountProfileSchema)