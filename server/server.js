const express=require('express')
const colors=require('colors')
const cors=require('cors')
const connectDB = require('./config/db')
const dotenv=require('dotenv').config()
const hotelRouter=require('./routes/hotelRouter')
connectDB()
const app=express()
app.use(express.json())
app.use(cors())
app.use('/api',hotelRouter)
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server running at the http://localhost:--${PORT}`.bgYellow)
})