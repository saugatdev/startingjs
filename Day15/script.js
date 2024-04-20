const containerE1 = document.querySelector(".container");

window.addEventListener("mousemove",(event)=>{
containerE1.innerHTML=`
<div class="mouse-event">


<h4>Mouse X Position</h4>
${event.clientX}


<div class="mouse-event">

<h4>Mouse Y Position</h4>
${event.clientY}



    </div>`
})