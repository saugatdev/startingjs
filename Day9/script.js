const ageInput =document.getElementById("agedate");
const btn =document.getElementById("calculate");
const result = document.getElementById("ageans");

function calculateage(){
const ageValue = ageInput.value;
if (ageValue==""){
    alert("Please enter the date");
}
else{
    const age =getAge(ageValue);
    result.innerText=`Your age is ${age} old`
}

}

function getAge(ageValue){
    const currentDate=new Date();
    const birthdayDate=new Date(ageValue);
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
    const month = currentDate.getMonth()-birthdayDate.getMonth();


return age;
}

btn.addEventListener("click", calculateage);

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'Enter' key
    if (event.key === 'Enter') {
      calculateage();
    }
  });