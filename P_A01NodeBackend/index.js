
require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello this is Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello User Login to Come Here !</h1>')
  })

app.get('/signup', (req, res) => {
    res.send('<h1>Hello User singup to Come Here !</h1>')
  })

  
app.listen(process.env.PORT, () => {

  console.log(`Example app listening on port ${port}`)
})