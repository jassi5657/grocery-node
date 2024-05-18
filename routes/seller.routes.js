const express = require('express')
const { getAddProduct, getUpdateProduct , postProduct, updateProduct, deleteProduct, getDashboard, adminProduct, adminOrder  } = require('../controller/seller.controller')
const router = express.Router()



// router.get('/add',)


router.get('/add', getAddProduct  )
router.post('/add', postProduct)
router.get('/order', adminOrder)


router.get('/update/:id', getUpdateProduct  )
router.post('/update/:id', updateProduct  )

router.get('/delete/:id', deleteProduct  )
router.get('/dashboard', getDashboard  )
router.get('/adminProduct', adminProduct  )


// router.get('/signup',  )

// router.post('/login' , )
// router.post('/signup' ,  )


module.exports = router