const mongoose=require('mongoose')

mongoose.Promise=global.Promise

<<<<<<< HEAD
// 'mongodb://localhost:27017/trip-your-plan' ||
mongoose.connect(  process.env.MONGOLAB_URI ,{userNewUrlParser:true})

=======

// 
mongoose.connect(  'mongodb://localhost:27017/trip-your-plan' || process.env.MONGOLAB_URI ,{userNewUrlParser:true})
>>>>>>> f5b220eb1effc9e58c5292b80accbb382b9b59e2
        .then(() =>{
            console.log('connected to db')
        })
        .catch(err =>{
            console.log('listening on port', port)
        })

module.exports=mongoose

