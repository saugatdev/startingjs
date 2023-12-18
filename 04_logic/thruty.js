const userEmail ={}
if(userEmail)
{
    console.log("Got User Email")

}

else{

    console.log("Don't have user email");
}


//falsy values
//false, 0,-0, BigInt 0n, null, undefined,"",NaN

//truthy values
//"0",'false'," ",[],{}, function(){}


if(userEmail.length===0){
    console.log('Aray is Empty')
}

//Nullish Coalescing Operator (??): null undefined

//Safety Check

//ternary Operator

//condition? true :false

const iceTeaProce =100
iceTeaProce>=80 ? console.log("less than 100"):console.log("more than 100");