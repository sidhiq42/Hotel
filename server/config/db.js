const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGODB)
    console.log(`Database Connected Succesfully :----${con.connection.host}`.bgBlue)
    }
   catch(error){
    console.log(`DataBase NOt Connected ${error.message}`.bgRed)
   }
}

module.exports=connectDB