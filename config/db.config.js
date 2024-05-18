const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/seller-ecommerce')

const db = mongoose.connection

db.once('open' , ()=>{
    console.log('connected with mongo')
})

db.on('error' , (err)=>{
    console.log('something went wrong' , err)
})