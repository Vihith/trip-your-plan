const mongoose = require('mongoose')
const moment = require('moment')


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
    },
    friend:[{
        type:Schema.Types.ObjectId,
        ref:"Friend"
    }],
    checklist:[{
        type:Schema.Types.ObjectId,
        ref:"CheckList"
    }]

})

const Plan = mongoose.model('Plan', planSchema)
module.exports = Plan