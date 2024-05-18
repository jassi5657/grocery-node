const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
        username : {
            type : String ,
            unique : true 
        } ,
        email : {
            type : String ,
            required : true
        } , 
        password : {
            type  : String ,
            required : true  
        } ,
        phone : {
            type : Number
        } ,
        role : {
            type : String ,
            default : "user"
        } 
} , {
    timestamps : true 
})

const User = mongoose.model('users' , userSchema)

module.exports = User