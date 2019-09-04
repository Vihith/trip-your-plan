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
    console.log(body)
    User.findByCredentials(body.email, body.password)
         .then(function(user){
             Promise.all([user.generateToken()])
                .then(values => {
                    const { _id, firstName, lastName, email } = user 
                    const userInfoForRedux = { _id, firstName, lastName, email}
                    res.json({ userInfoForRedux, token: values[0].token})
                })
            //  return user.generateToken()
         })
        // .then(function(response){
    
        //     res.json({response})
        //     //res.send(user)
        // })
        .catch(err =>{
            res.send(err)
        })
})

router.get('/user/profile', authenticateUser,function(req,res){
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

router.put('/user/profile/edit',authenticateUser,function(req,res){
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
