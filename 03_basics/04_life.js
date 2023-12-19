//Immediately Invoked Function Expression (LIFE)

(function chai(){

    //named IIFE
    console.log(`DB CONNECTED`)

})();


//unamed IFFI

((name)=>{
    console.log(`db connected two ${name}`)
})('saugat')
