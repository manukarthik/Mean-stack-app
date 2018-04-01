var Mongoose= require('mongoose')

module.exports=Mongoose.model('Post',{
    msg : String
})