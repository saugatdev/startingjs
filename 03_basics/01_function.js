//function with many other
function sayMyname(){
    console.log("h");
    console.log("i");
    console.log("t");
}
//sayMyname()


// function add(num1,num2){
//     console.log(num1+num2)  
//    }
//   add(3,null)
 
   
   //Num1 and num2 are parameters
  //And 3, null are arguments

  function add(num1,num2){
    // let result =num1 + num2
    // return result
    return num1+num2

   }
   
   const result = add(3,5)
   // console.log(result)

//    function loginUserMessage(username){
//     return`${username} just logged in`

//    }
//    console.log(loginUserMessage("Saugat"))


   function loginUserMessage(username="Sam"){
    if(!username){
        console.log("Please enter the username")
        return

    }
    return`${username} just logged in`

   }
  // console.log(loginUserMessage())



   //Shopping cart situations

   function calculateCartPrice(val1,val2, ...num1){
    return num1
   }
   //console.log(calculateCartPrice(100,400,300,200)) 


    const user={
        username:"saugat",
        price:199

    }
    const user2={
        username:"sak",
        price:199

    }

    function handleObject(anyObject){
        console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
        
    }

    // handleObject(user)
    //  handleObject(user2)

 