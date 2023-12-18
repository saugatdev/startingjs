//if 

// < , > , <=,  >==, ==, ==, !=, ===

if(2==="2"){
    console.log("Executed")
}
// console.log("APPLE"))


const temp =555
if(temp<50&&temp<100){
    console.log("Less than 50");
}


const score =200
if(score>100)
{
    const power ="fly"
    console.log(`user power:${power}`)
}
console.log(`user power:${power}`)

//  Short hand notaation

const balance =1000

//if(balance>500) console.log("test");
// if(balance<500){
//     console.log("Less than 500")
// }
// else if(balance<750){
//     console.log("Less than 750 ")
// }
// else{
//     console.log("Less than 1200 ")
// }


const userLoggedIn= true
const debitCard=true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
  //  console.log("Allow the user to buy the course");
}

if(LoggedInFromEmail || LoggedInFromGoogle){
  //  console.log("Allow the user to Login");
}




