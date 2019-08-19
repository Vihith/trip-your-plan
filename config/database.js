const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/trip-your-plan',{useNewUrlParser: true})
.then(() => {
    console.log('Connected to Database')
})
.catch(err => {
    console.log('listening on port', port)
})

module.exports = mongoose