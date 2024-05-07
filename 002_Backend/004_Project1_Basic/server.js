const express = require("express");
const dotenv = require("dotenv").config();

const app=express();

const port =process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send( "Get all Contacts Bruh")
// })


// app.get('/api/contacts',(req,res)=>{
//     res.json({message: "Get all Contacts Bruh"})
// })

// app.get('/api/status',(req,res)=>{
//     res.status(200).json({message: "Get all Contacts Bruh"})
// })
app.use(express.json())

app.use("/api/contacts",require("./routes/contactRoutes"))


app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})