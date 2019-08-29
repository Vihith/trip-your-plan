const mongoose=require('mongoose')

const Schema=mongoose.Schema

const checkListSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    plan:{
        type:Schema.Types.ObjectId,
        ref:"Plan"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})



const CheckList=mongoose.model('CheckList',checkListSchema)

module.exports=CheckList