const mongoose=require('mongoose')

const Schema=mongoose.Schema

const destinationSchema=new Schema({
    destination:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Destination=mongoose.model('Destination',destinationSchema)

module.exports=Destination