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


var figlet = require("figlet");

figlet("Sheryians", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


