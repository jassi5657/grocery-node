const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    url : String,
    
    category : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true ,
        max : 500
    }    ,
    sellerId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "users"
    } ,
    price : {
        type : Number ,
        required : true 
    }
} , {
    timestamps : true
})

const Product = mongoose.model('products' , productSchema)

module.exports = Product

