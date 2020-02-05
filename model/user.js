const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
    username:String, 
    email:String,
    age:Number
})

const user = mongoose.model("user", userSchema)

module.exports = user;