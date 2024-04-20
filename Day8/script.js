const billInput = document.getElementById("billamount")
const tipInput= document.getElementById("tip");
const totalSpan =document.getElementById("total");
const btn= document.getElementById("calculate");


function calculateTotal(){
    const billValue =billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue *(1+tipValue/100);
    totalSpan.innerText=totalValue.toFixed(2);

}

btn.addEventListener("click",calculateTotal);

