const express = require("express");
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require("./connect")
const app = express();
const PORT = 8000;


connectToMongoDB('mongodb')

app.use("/url",urlRoute);


app.listen(PORT,()=>{
    console.log(`Started PORT at ${PORT}`);
})