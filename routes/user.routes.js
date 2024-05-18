const { signUp, getSignup, postLogin , getLogin, logout, getMyAccount, getLoginSeller, postLoginSeller, getSignupSeller, postSignupSeller } = require("../controller/user.controller")

const express = require('express')
const router = express.Router()

router.get('/login' , getLogin)
router.post('/login' , postLogin)

router.get('/signup' , getSignup)
router.post('/signup' , signUp)

router.get('/myaccount' , getMyAccount)

router.get('/logout' , logout)


// seller 
router.route('/seller/login').get(getLoginSeller).post(postLoginSeller)
router.route('/seller/signup').get(getSignupSeller).post(postSignupSeller)


// signup


// router.get('/seller/login' , getLoginSeller)
// router.post('/seller/login', postLoginSeller )


// router.


module.exports = router