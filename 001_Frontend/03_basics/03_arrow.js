
const user ={
    username:"saugat",
    price:999,

    welcomeMessage :  function(){
        console.log(`${this.username} welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//    let username="saugat"
//     console.log(this.username)
// }
// chai()


const chai =()=>{
    let username="saugat"
    console.log(this)
}
chai()


///Arrow function
//  const addtwp =(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(addtwo(3,4))

 const addtwp =(num1,num2)=>{
    return num1+num2
 }
 console.log(addtwo(3,4))

 

 const addTwo =(num1,num2)=>(num1+num2)