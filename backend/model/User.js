const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const User  = mongoose.model("User",Userschema);

module.exports =User