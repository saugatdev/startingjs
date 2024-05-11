// var a = 12;
// console.log("hello")

// function toprint(){
//     console.log("saugat");
// }

// module.exports = {
//     a: a,
//     toprint:toprint
// }

// var oneLinerJoke = require('one-liner-joke');

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)


// var figlet = require("figlet");

// figlet("SAUGAT", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });




const express = require('express');
const { nextTick } = require('process');
const app = express();


app.use(function(req,res,next){
  console.log("Hello");
  next();
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});




app.get('/profile', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)