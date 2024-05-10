const {Schema, model} = require('mongoose')

const trailSchema = new Schema({
    trailName: {
        type: String,
        required: true,
        trim: true
    },
    trailLength: {
        type: String,
        required: true
    },
    averageTime: {
        type: String,
        required: true
    },
    elevationGain: {
        type: String,
        required: true
    },
    trailType: {
        type: String,
        required: true
    },
    trailAddress1: {
        type: String,
        required: true,
        trim: true
    },
    trailAddress2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: String,
        required: true,
        trim: true
    },
    longitude: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    }
}, {timestamp: true})

module.exports = model('trail', trailSchema)
