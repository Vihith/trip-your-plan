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
    }
})

// checkListSchema.pre('save',function(next){
//     const checklist=this
//     if(checklist.isNew){
//         checklist=checklist.data
//         next()
//     }else{
//         next()
//     }
// })

const CheckList=mongoose.model('CheckList',checkListSchema)

module.exports=CheckList