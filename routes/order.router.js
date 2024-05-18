const express = require('express')
const { getOrder, postOrder, cancelOrder, updateOrderStatus, updatedOrder } = require('../controller/order.controller')

const router = express.Router()


router.get('/' , getOrder )
router.post('/' , postOrder )

// router.post('/' , updateOrderStatus )
router.post('/:id' , updatedOrder )


router.get('/:id', cancelOrder  )




module.exports = router