const Hotel = require('../models/hotelAuth');
const bcrypt = require('bcrypt');

const hotelDetails = {
    registerHotel: async (req, res) => {
        try {
            const { hotelname, address, phone, photo, email, password } = req.body;
            const checkHotel = await Hotel.findOne({ email });
            if (checkHotel) {
                return res.status(400).json({
                    message: "Hotel already registered. Please choose other details."
                });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const hotel = await Hotel.create({
                hotelname,
                address,
                phone,
                photo,
                email,
                password: hashPassword
            });
            // No need to call hotel.save() since the hotel is already created via Hotel.create()

            return res.status(201).json({
                message: "Hotel Details Created",
                hotel
            });
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    
    loginHotel:async(req,res)=>{
        try{
            const {email,password}=req.body
            const checkhotel=await Hotel.findOne({email})
            if(!checkhotel){
                return res.status(400).json({
                    message:"invalid Email Address"
                })
            }
            const comparePassword=await bcrypt.compare(password,checkhotel.password)
            if(!comparePassword){
                return res.status(400).json({
                    message:"invalid Password Details"
                })
            }
            return res.status(201).json({
                message:"login successful"
            })
        }
        catch(error){
            return res.status(505).json({
                message:"Internal Server Error"
            })
        }
    }
};

module.exports = hotelDetails;
