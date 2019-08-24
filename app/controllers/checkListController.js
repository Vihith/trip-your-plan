const CheckList=require('../models/checkList')

module.exports.list=(req,res) =>{
    CheckList.find().populate('plan') //({userId=req.user._id})
            .then(checklists =>{
                res.send(checklists)
            })
            .catch(err =>{
                res.send(err)
            })
}

module.exports.show=(req,res) =>{
    const id=req.params.id
    CheckList.findById(id)
          .then(checklists =>{
              res.send(checklists)
          })
          .catch(err =>{
              res.send(err)
          })
}

module.exports.create=(req,res) =>{
    const data=req.body
    const checklist=new CheckList(data)
   // checklist.userId=req.user._id
    checklist.save()
        .then(checklists =>{
            res.send(checklists)
        })
        .catch(err =>{
            res.send(err)
        })
}

module.exports.update=(req,res) =>{
    const id=req.params.id
    const body=req.body
    CheckList.findByIdAndUpdate(
        id,{$set:body},{new:true}
        )
        .then(checklists =>{
            res.send(checklists)
        })
        .catch(err =>{
            res.send(err)
        })
}

module.exports.destroy=(req,res) =>{
    const id=req.params.id
    CheckList.findByIdAndDelete(id)
    .then(checklists =>{
        res.send(checklists)
    })
    .catch(err =>{
        res.send(err)
    })
}