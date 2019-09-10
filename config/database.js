const mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect(  'mongodb://localhost:27017/Trip-your-plan' || process.env.MONGOLAB_URI ,{userNewUrlParser:true})

        .then(() =>{
            console.log('connected to db')
        })
        .catch(err =>{
            console.log('listening on port', port)
        })

module.exports=mongoose

