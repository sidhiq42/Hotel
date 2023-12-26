const mongoose=require('mongoose')

const hotelSchema=new mongoose.Schema({
    hotelname:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})
const Hotel=mongoose.model('Hotels',hotelSchema)
module.exports=Hotel