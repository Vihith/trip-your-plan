const express = require('express')
const mongoose = require('./config/database')
const {userRouter} = require('./app/controllers/userController')

const cors = require('cors')

const app = express()
const port = 3005

app.use((express.json()))
app.use('/',userRouter)

app.listen(port,() => {
    console.log('Listening on port', port)
})