const mongoose=require('mongoose')

const Schema=mongoose.Schema

const checkListSchema=new Schema({
    name:{
        type:String,
        required:true
    }
})
const CheckList=mongoose.model('CheckList',checkListSchema)

module.exports=CheckList