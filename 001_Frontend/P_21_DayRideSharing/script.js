const username= document.getElementById("username");
const password= document.getElementById("password");
const login = document.getElementById("login");
const uname= document.getElementById("uname");
const userlocation= document.getElementById("userlocation");
const dlocation = document.getElementById("dlocation");
const next =document.getElementById("Next");
const back1 = document.getElementById("back");
const user1= document.getElementById("user1");
const rider1= document.getElementById("rider1");
var divElements = document.querySelectorAll('.b1');

if(user1!==null){
user1.addEventListener("click",function(){
    window.location.href="Loginpanel.html"
})

}
else{



if (login !== null) {

login.addEventListener("click",function(){
    if(username.value==="admin" && password.value==="admin"){
        window.location.href = "details.html"
    }
    else{
        alert("Wrong Credentials");
    }
})
}

else{

    if(next!== null){

    
next.addEventListener("click",function(){
    if(uname.value==="" || userlocation.value ==="" || dlocation.value===""){
        alert("Empty Value. Please Enter the Details");
    }
    else{
        window.location.href = "riders.html"



    }
})
    }
    else{
        
  if(back1 !==null){

  
back1.addEventListener("click",function(){
 window.location.href = "index.html"
})
}
    }
    
}}

divElements.forEach(function(divElement) {
    divElement.addEventListener('click', function() {
        alert('Get Ready to start the Ride ,Rider Coming in 3 minutes!');
    });
});








