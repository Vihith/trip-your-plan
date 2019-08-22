const mongoose = require('mongoose')

const Schema = mongoose.Schema


const planSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Plan = mongoose.model('plan', planSchema)
module.exports = Plan