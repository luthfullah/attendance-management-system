
const express = require('express');
const mongoose = require('mongoose');
const StudentAttendance = require('./Routes/AttendanceRoute')
const Attendance =require('./Routes/AttendanceRoute')
// const router=require('./Routes/Medicine-routes')
// const Cartrouter = require('./Routes/CartMedicine-routes')
// const Orderrouter = require('./Routes/OrderMedicine')
const cors =require('cors');
const Users = require('./Routes/UserRoute')


const port=5001
const app = express();
app.use(express.json());
app.use(cors());


//middle ware
// localhost/medicine get all medicine
// app.use('/medicine',router) 
// app.use('/cartmedicine', Cartrouter)
app.use('/allstudents', Attendance)
app.use('/presentstudent',StudentAttendance )
app.use('/', Users)


// user enter un routed link
app.use((req,res)=>{
    res.status(404).json({error:"Url Not Found..."})
})


//database connectivity
mongoose.connect('mongodb+srv://AMS:AMS@cluster0.totba8r.mongodb.net/')
.then(console.log("connected"))
.then(()=> console.log("connected to database"))

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



