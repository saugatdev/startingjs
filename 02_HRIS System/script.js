const profile = document.getElementById("profile");
const directory = document.getElementById("directory");
const leaves = document.getElementById("leaves");
const review = document.getElementById("review");
const goback = document.getElementById("goback");
const container = document.getElementById("container");

profile?.addEventListener("click", function(){
    window.location.href = "profile.html";
});

directory?.addEventListener("click", function(){
    window.location.href = "employee.html";
});

leaves?.addEventListener("click", function(){
    window.location.href = "leaves.html";
});

goback?.addEventListener("click", function(){
    window.location.href = "index.html";
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
