const mongoose=require('mongoose')

mongoose.Promise=global.Promise


// 'mongodb://localhost:27017/trip-your-plan' ||
mongoose.connect(  process.env.MONGOLAB_URI ,{userNewUrlParser:true})
        .then(() =>{
            console.log('connected to db')
        })
        .catch(err =>{
            console.log('listening on port', port)
        })

module.exports=mongoose

