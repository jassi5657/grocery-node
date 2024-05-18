
const decodeJWT = require("../utils/utility")


function authMiddleware(req , res , next){
    const token = req.cookies.token

    if(!token){
        return res.redirect('/user/seller/login')
    }

    const decoded = decodeJWT(token)
    req.user = decoded

    next()
}

function isSeller(req , res , next ){
        const role = req.user.role
        if(role != "seller"){
            res.redirect('/product')
        }
        next()
    }

module.exports = { authMiddleware , isSeller }
