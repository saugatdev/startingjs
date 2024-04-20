const input = document.getElementById("input-p");
const result = document.getElementById("result-w");
const errorE1= document.getElementById("error");

const selectElement = document.querySelector("#value");

function updateResults(){
    const selectedValue = selectElement.value;


    if(input.value<=0){
   error.innerHTML="Please enter number"
    }
    else{
        error.innerHTML= "";
        if(selectedValue==="pounds"){
            result.innerHTML =(+input.value/2.2).toFixed(2)+"lbs";

        }
        else{
            result.innerHTML =(+input.value * 2.2).toFixed(2)+"kg";
        }
    }




}

input.addEventListener("input", updateResults);