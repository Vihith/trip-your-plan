const express=require('express')
const router=express.Router()
const User=require('../models/user')
const authenticateUser =require('../middlewares/authentication')

router.post('/register',function(req,res){
      const body=req.body
      const user=new User(body)
      user.save()
          .then(user =>{
              console.log(user)
              res.send(user)
          })
          .catch(err =>{
              res.send(err)
          })
})

router.post('/login',function(req,res){
    const body=req.body
    User.findByCredentials(body.email, body.password)
         .then(function(user){
             return user.generateToken()
         })
        .then(function(token){
    
            res.send({token})
            
            //res.send(user)
        })
        .catch(err =>{
            res.send(err)
        })
})

router.get('/account', authenticateUser,function(req,res){
    const user=req.user
    res.send(user)
})

router.delete('/logout',authenticateUser,function(req,res){
    const user=req.user
    const token=req.token
    User.findByIdAndUpdate(user._id,{ $pull:{tokens:{token:token}}})
      .then(function(){
          res.send('successfully logged out')
      })
      .catch(function(err){
          res.send(err)
      })
})

router.put('/account/edit',authenticateUser,function(req,res){
    // const user = req.user 
    const user = req.user 
    const { firstName, lastName } = req.body 
    User.findOneAndUpdate({ _id: user._id}, {$set: { firstName, lastName}}, { new: true })
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.send(err)
        })


})
module.exports={
    userRouter:router
}
