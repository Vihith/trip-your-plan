const mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect(   process.env.MONGOLAB_URI ,{useNewUrlParser:true})

        .then(() =>{
            console.log('connected to db')
        })
        .catch(err =>{
            console.log('listening on port', port)
        })

module.exports=mongoose