const Destination=require('../models/destination')

module.exports.list=(req,res)=>{
   Destination.find({userId:req.user._id})
          .then(destinations =>{
              res.send(destinations)
          })
          .catch(err =>{
              res.send(err)
          })
}

module.exports.show=(req,res) =>{
    const id=req.params.id
    Destination.findOne({
        _id:id,
        userId:req.user._id
    })
    .then(destinations =>{
        res.send(destinations)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports.create=(req,res) =>{
    const data=req.body
    const destination=new Destination(data)
    destination.userId=req.user._id
    destination.save()
    .then(destinations =>{
        res.send(destinations)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    Destination.findByIdAndUpdate({
        _id:id,
        userId:req.user._id},{$set:body},{new:true}
        )
        .then(destinations =>{
            res.send(destinations)
        })
        .catch(err =>{
            res.send(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Destination.findByIdAndDelete({
        _id:id,
        userId:req.user._id
    })
    .then(destinations =>{
        res.send(destinations)
    })
    .catch(err =>{
        res.send(err)
    })
}