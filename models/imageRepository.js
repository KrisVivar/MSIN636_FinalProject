const {Schema, model} = require('mongoose')

const imageRepositorySchema = new Schema({
    imgURL: {
        type: String,
        required: true
    },
    imgCap: {
        type: String,
        required: true
    },
    imgGeo: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true
    } 
}, {timestamp: true})

module.exports = model('imageRepository', imageRepositorySchema)