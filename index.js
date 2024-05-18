const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080 
// npm i dotenv
// process.env.variable_name


const db = require('./config/db.config')
const cookieParser = require('cookie-parser')
const { isSeller , authMiddleware } = require('./middleware/auth.middleware.js')
const { getSingleData, getProduct, getHome , getHomeCategory, getSlider, getHomeSlider, getSnaks } = require('./controller/product.controller.js')
const { getCart } = require('./controller/cart.controller.js')

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser())

app.set('view engine' , "ejs")

app.get('/' , getHome )



app.use('/cart', authMiddleware, require("./routes/cart.router.js"))





app.get('/cart', (req, res) => {
    const cart = req.session.cart;
    res.render('cart.ejs', { cart: cart });
  });



app.get('/category', (req,res)=>{
    res.render("category.ejs")
})



app.get('/address', (req,res)=>{
    res.render("addressform.ejs")
})


app.get('/features', (req,res)=>{
    res.render("features.ejs")
})

app.get('/blog', (req,res)=>{
    res.render("blog.ejs")
})


app.get('/vegitables', (req,res)=>{
    res.render("vegitables.ejs")
})

app.get('/fruits', (req,res)=>{
    res.render("fruits.ejs")
})

app.get('/diaryProduct', (req,res)=>{
    res.render("diaryProduct.ejs")
})


app.get('/meat', (req,res)=>{
    res.render("meat.ejs")
})


app.get('/bakingGoods', (req,res)=>{
    res.render("bakingGoods.ejs")
})


app.get('/desserts', (req,res)=>{
    res.render("/desserts.ejs")
})

app.get('/dryFruits', (req,res)=>{
    res.render("/dryFruits.ejs")
})

app.get('/other', (req,res)=>{
    res.render("/other.ejs")
})


app.get('/cart', getCart)




app.use('/user' , require('./routes/user.routes.js'))
app.use('/product' , require('./routes/product.routes.js'))
app.use('/order' , require('./routes/order.router.js'))

app.use('/seller',authMiddleware , require('./routes/seller.routes.js') )


// app.get('/singlePage/:id',getSingleData)


app.listen(PORT , ()=>{
    console.log(`server on ${PORT}`)
})