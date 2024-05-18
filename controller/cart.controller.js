const Cart = require("../model/cart.model")

async function getCart(req , res){
    const data = await Cart.find()

    res.render('cart.ejs',{product:data} )
}


async function deleteCart(req , res){
    const { id } = req.params
    const data = await Cart.deleteOne({ _id : id })
    res.redirect("/cart")
} 




module.exports = {
    getCart,
    deleteCart
}
