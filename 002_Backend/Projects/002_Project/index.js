const express = require('express')
const app = express()
const port = 3000;
const booksRouter = require('./routes/books.js');
const otherRouter = require('./routes/others.js')

app.use('/books', booksRouter);
app.use('/others',otherRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})