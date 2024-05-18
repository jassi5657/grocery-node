const Cart = require("../model/cart.model")
const Order = require("../model/order.model")

async function getOrder(req , res){
    const data = await Order.find()

    res.render('order.ejs',{product:data} )
}

async function postOrder(req , res){
    try {
       const orderObj = new Order({
            name:req.body.name,
            url:req.body.url,
            price:req.body.price,
            status:req.body.status,

        })

        const orderData  = await orderObj.save()
        console.log(orderData);
        res.redirect("/order")
    } catch (error) {
        res.status(400).send({success:false, msg:error.message})
        
    }
}


async function updatedOrder(req, res){
  const orderId = req.params.id;
  const updatedStatus = req.body.status;

  try {
    const order = await Order.findByIdAndUpdate(orderId, { status: updatedStatus }, { new: true });
    res.redirect("/seller/order");
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status', error });
  }
};



// async function updateOrderStatus(req, res) {
//   const { id } = req.params
//   const { status } = req.body

//   try {
//     const order = await Order.findOne({ _id: id })

//     if (!order) {
//       return res.status(404).send({ success: false, msg: 'Order not found' })
//     }

//     order.status = status

//     const updatedOrder = await order.save()

//     res.redirect('/seller/order')
//   } catch (error) {
//     res.status(500).send({ success: false, msg: error.message })
//   }
// }




async function cancelOrder(req , res){
    const { id } = req.params
    const data = await Order.deleteOne({ _id : id })
    res.redirect("/order")
} 


module.exports = {
    getOrder,
    postOrder,
    cancelOrder,
    // updateOrderStatus,
    updatedOrder
}
