var friend = document.getElementById("add");
const statusE= document.getElementById("status")
var count = 0;

friend.addEventListener("click",function(){

    if (count==0){
        statusE.innerHTML="Friends";
        statusE.style.color="Green";
        friend.innerHTML="Remove Friend";
        count =1;
    }

    else{
        statusE.innerHTML="Stranger";
        statusE.style.color="Red";
        friend.innerHTML="Add Friend";
        count =0;

    }



})


