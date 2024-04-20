const numberE1= document.getElementById("number");
const minusE1= document.getElementById("minus");
const addE1= document.getElementById("Add");
const resetE1= document.getElementById("Reset");
let counter =0;


// minusE1.addEventListener("click",function(){


// })

addE1.addEventListener("click",function(){
    counter++;
    updateCounter();
});

minusE1.addEventListener("click", function() {
    counter--;
    updateCounter();
  });


resetE1.addEventListener("click", function() {
    counter = 0;
    updateCounter();
  });

  function updateCounter() {
    numberE1.innerHTML = counter;
  }
