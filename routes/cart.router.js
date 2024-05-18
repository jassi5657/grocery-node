const express = require('express')
const { getCart, getItemToCart, deleteCart } = require('../controller/cart.controller')

const router = express.Router()

router.get('/' , getCart )

router.get('/:id', deleteCart  )


module.exports = router