const express=require('express')
const hotelDetails = require('../controllers/hotelController')
const router=express.Router()


router.post('/register',hotelDetails.registerHotel)
router.post('/login',hotelDetails.loginHotel)
module.exports=router