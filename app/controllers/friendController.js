const Friend =require('../models/friend')

module.exports.list=(req,res) =>{
    Friend.find({userId:req.user._id})
         .then(friends =>{
             res.send(friends)
         })
         .catch(err =>{
             res.send(err)
         })
}

module.exports.show=(req,res) =>{
    const id=req.params.id
    Friend.findOne({
        _id:id,
        userId:req.user._id
    })
    .then(friends =>{
        res.send(friends)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports.create=(req,res) =>{
    const data=req.body
    const friend=new Friend(data)
    friend.userId=req.user._id
    friend.save()
    .then(friends =>{
        res.send(friends)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    Friend.findOneAndUpdate({
         _id:id,
         userId:req.user._id},{$set:body}, {new: true}
         )
    .then(friends =>{
        res.send(friends)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports.destroy=(req,res) =>{
     const id=req.params.id
     Friend.findOneAndDelete({
         _id:id,
         userId:req.user._id
     })
     .then(friends =>{
         res.send(friends)
     })
     .catch(err =>{
         res.send(err)
     })
}