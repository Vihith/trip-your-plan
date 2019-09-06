const express=require ('express')
const mongoose=require('./config/database')
const {userRouter} =require('./app/controllers/userController')
const router = require('./config/routes')

const path = require('path')
const cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())
app.use('/',userRouter)
app.use('/user',router)

// 3005 ||
const port =  process.env.PORT
app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname + "/client/build/index.html"))
})




app.listen(port,() =>{
    console.log('listening on port',port)

})