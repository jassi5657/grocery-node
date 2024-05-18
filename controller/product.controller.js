const Cart = require("../model/cart.model");
const Product = require("../model/product.model");


// async function getCart(req , res){
//     const data = await Cart.find()

//     res.render('cart.ejs',{product:data} )
// }


async function getItemToCart(req, res) {
    try {
        const cartObj = await Cart.findOne({ name: req.body.name });

        if (cartObj) {
            // Update quantity
            cartObj.qty += req.body.qty;
            await cartObj.save();
        } else {


            const cartObj = new Cart({
                name: req.body.name,
                url: req.body.url,
                price: req.body.price,
                qty: req.body.qty

            })
            const cartData = await cartObj.save()
        }

        res.redirect("/cart")
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })

    }
}



// async function getItemToCart(req, res) {
//     try {
//       const cartObj = await Cart.findOne({ name: req.body.name });
//       if (cartObj) {
//         // Update quantity
//         cartObj.qty += req.body.qty;
//         await cartObj.save();
//       } else {
//         // Create new item in cart
//         cartObj = new Cart({
//           name: req.body.name,
//           url: req.body.url,
//           price: req.body.price,
//           qty: req.body.qty
//         });
//         await cartObj.save();
//       }
//       res.redirect("/cart");
//     } catch (error) {
//       res.status(400).send({ success: false, msg: error.message });
//     }
//   }



async function getProduct(req, res) {
    const data = await Product.find().slice('products', 5)
    res.render('products', { product: data })
}





async function getHome(req, res) {
    const data = await Product.find()
    res.render('homepage', { product: data })
}





async function getdiaryProducts(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "diary product" })
    res.render('products', { product: data })
}


async function getVegitables(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "vegi" })

    res.render('products', { product: data })
}




async function getFruits(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "fruits" })
    res.render('products', { product: data })
}

async function getSnacks(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "snacks" })
    res.render('products', { product: data })
}



async function getSoft(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "soft drinks" })
    res.render('products', { product: data })
}


async function getSweet(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "desserts" })
    res.render('products', { product: data })
}


async function getBaking(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Baking Goods" })
    res.render('products', { product: data })
}


async function getBaking(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Dry Fruits" })
    res.render('products', { product: data })
}

async function getBreak(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "breakfast & instance tooth" })
    res.render('products', { product: data })
}

async function getTea(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Tea Coffee" })
    res.render('products', { product: data })
}

async function getAtta(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Atta Rice" })
    res.render('products', { product: data })
}


async function getClean(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Cleaning-Essential" })
    res.render('products', { product: data })
}

async function getPersonal(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "PersonalCare" })
    res.render('products', { product: data })
}







async function getmeat(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Chicken" })
    res.render('products', { product: data })
}


async function getBakingGoods(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Baking goods" })
    res.render('products', { product: data })
}



async function getDessert(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "dessert" })
    res.render('products', { product: data })
}


async function getdryFruits(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "Dry Fruits" })
    res.render('products', { product: data })
}


async function getMasala(req, res) {
    const { category } = req.params
    const data = await Product.find({ category: "other" })
    res.render('products', { product: data })
}












function getCategoryProduct(req, res) {
    res.render('category.ejs')
}



async function getSingleData(req, res) {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    res.render('singlePage.ejs', { data: data })

}

async function searchProduct(req, res) {
    // /search/:query
    // /search?query="iph"
    const { title } = req.query
    console.log(title)

    const product = await Product.findOne({ $text: { $search: title } })
    return res.json(product)
}




module.exports = {
    getProduct, getSingleData, searchProduct, getCategoryProduct,

    getVegitables,
    getFruits,
    getdiaryProducts,
    getmeat,
    getBakingGoods,
    getDessert,
    getdryFruits,
    getHome,
    getItemToCart,
    getTea,
    getAtta,
    getBaking,
    getClean,
    getSnacks,
    getMasala,
    getPersonal,
    getBreak,
    getSweet,
    getSoft

}  