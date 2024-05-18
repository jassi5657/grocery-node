const Order = require("../model/order.model")
const Product = require("../model/product.model")
const User = require("../model/user.model")

// @METHOD
// @ROUTE
// @ROLE



// for getting the product


function getAddProduct(req , res){
    res.render('AddProduct.ejs')
}


// for adding product to db

async function postProduct(req , res){
    const { name , category , price , description, url } = req.body
    const status = await Product.create({ name , category , price , description, url:url })
    res.redirect('/product')
}

// for getting updated product


async function getUpdateProduct(req , res){
    const {id } = req.params 
    const product = await Product.findOne({ _id : id  })
    res.render('updateProduct.ejs' , { product : product })
}

// for update the product

async function updateProduct(req , res){
    const { id } = req.params
    const { name , price , category , description } = req.body

    const data = await Product.updateOne({ _id : id } , { name : name , price , category , description })

    res.redirect('/product')
    // update({query} , { updation })
}




// for deleting the product

async function deleteProduct(req , res){
    const { id } = req.params
    const data = await Product.deleteOne({ _id : id })
    res.json({ status : data }) 
} 



async function getDashboard(req, res) {
    const user = await User.findById(req.user.id);
    const data = await Product.find({ sellerId: req.user.id }); 
    res.render("dashboard.ejs", { products: data }); 
  }


 async function adminProduct(req , res){
    const data = await Product.find() 
    res.render("adminProducts.ejs" , { product : data  } )
}


async function adminOrder(req , res){
    const user = await User.findById(req.user.id);

    const data = await Order.find() 
    res.render("adminOrder.ejs" , { product : data, email: user? user.email:null  } )
}



module.exports = {
    getAddProduct ,
    postProduct ,
    getUpdateProduct ,
    updateProduct ,
    deleteProduct ,
    getDashboard,
    adminProduct,
    adminOrder
}