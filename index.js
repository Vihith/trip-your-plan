const express=require ('express')
const mongoose=require('./config/database')
const {userRouter} =require('./app/controllers/userController')
const router = require('./config/routes')

const cors=require('cors')

const app=express()
const port =3005

app.use(cors())
app.use(express.json())
app.use('/',userRouter)
app.use('/user',router)



app.listen(port,() =>{
    console.log('listening on port',port)

})