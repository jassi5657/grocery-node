const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    url : Array,
    
    
    
    price : {
        type : Number ,
        required : true 
    },

    status: {
        type: String,
        required: true,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    }
})

const Order = mongoose.model('order' , orderSchema)

module.exports = Order

