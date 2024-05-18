const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    url : Array,

    qty: {
        type:String,
        required:true,
        default: 1
    },
    
    price : {
        type : Number ,
        required : true 
    },
    
},{ timestamps: true }
)

const Cart = mongoose.model('cart' , cartSchema)

module.exports = Cart

