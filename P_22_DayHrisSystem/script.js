const profile = document.getElementById("profile");
const directory = document.getElementById("directory");
const leaves = document.getElementById("leaves");
const review = document.getElementById("review");
const edit = document.getElementById("edit");
const container = document.getElementById("container");
var image= document.getElementById("image");
const applyleave = document.getElementById("applyleave");


image?.addEventListener("click", function(){
    window.location.href = "index.html";
});

applyleave?.addEventListener("click", function(){
    window.location.href = "applyleave.html";
});


profile?.addEventListener("click", function(){
    window.location.href = "profile.html";
});

directory?.addEventListener("click", function(){
    window.location.href = "employee.html";
});

leaves?.addEventListener("click", function(){
    window.location.href = "leaves.html";
});

edit?.addEventListener("click", function(){
    container.style.display='block';
});

const save = document.getElementById("save");
const uname = document.getElementById("uname");
const jobtitle = document.getElementById("jobtitle");
const department = document.getElementById("department");

save?.addEventListener("click", function(){
    if(uname.value === "" || jobtitle.value === "" || department.value === ""){
        alert("Enter all the elements");
    } else {
        const valuen = uname.value;
        const valuej = jobtitle.value;
        const valued = department.value;
        localStorage.setItem('name', valuen);
        localStorage.setItem('job', valuej);
        localStorage.setItem('department', valued);
        location.reload();

        

    }
});






window.addEventListener("load", () => {
    const detailn = document.getElementById("detailn");
    const detailj = document.getElementById("detailj");
    const detaild = document.getElementById("detaild");

    const valuen = localStorage.getItem("name");
    detailn.innerHTML = `Name  : ${valuen}`;
    const valuej = localStorage.getItem("job");
    detailj.innerHTML = `Job Title: ${valuej}`;
    const valued = localStorage.getItem("department");
    detaild.innerHTML = `Department: ${valued}`;
});


function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

image.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor1');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
image.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor1');
    followCursor.style.display='block';
};

image.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor1');
        followCursor.style.display='none';
};



