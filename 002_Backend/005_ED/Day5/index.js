import express from "express"

const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Hello World')
})

app.get('/books', function (req, res) {
  res.status(200).send( "hello")
})




app.listen(3000,()=>{

    console.log("Sever has started");
})