import express from "express"

const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Hello World')
})

app.get('/books', function (req, res) {
  res.status(200).send( "hello")
})

app.get('/books/:id', function (req, res) {
  const bookId = req.params.id;
  res.status(200).send(`Book ID: ${bookId}`);})


app.listen(3000,()=>{

    console.log("Sever has started");
})