const express = require('express')
const { getProduct, getSingleData, seachProduct, searchProduct, getCategoryProduct, getVegitables, getFruits, getdiaryProducts, getDessert, getBakingGoods, getdryFruits, getOther, getmeat, getHome, getCart, getItemToCart, getHomeCategory, getHomeSlider, getSnaks, getSlider, getAtta, getBaking, getClean, getSnacks, getMasala, getPersonal, getBreak, getTea, getSoft, getSweet} = require('../controller/product.controller')

const router = express.Router()
router.get('/' , getProduct)
router.get('/' , getHome )

router.get('/vegitables', getVegitables )
router.get('/fruits', getFruits )
router.get('/diaryProduct',getdiaryProducts  )
router.get('/Chicken', getmeat)
router.get('/tea', getTea )
router.get('/atta' , getAtta )
router.get('/clean' , getClean )
router.get('/soft' , getSoft )
router.get('/sweet' , getSweet )
router.get('/snacks' , getSnacks )
router.get('/masala' , getMasala )
router.get('/personal' , getPersonal )
router.get('/break' , getBreak )
router.get('/dessert', getDessert )

















router.get('/single/:id' , getSingleData)
router.get('/search', searchProduct )
router.get('/category', getCategoryProduct )













router.post('/single/:id' , getItemToCart )


// router.post('/cart' , getItemToCart )











// router.get('/addProduct' , getAddProduct)
// router.post('/addProduct' , postProduct)


// // router.post('/' , postProduct)
// router.get('/update/:id' , getUpdateProduct)
// router.post('/update/:id' , updateProduct )

// router.delete('/delete/:id' , deleteProduct )

module.exports = router