function opennolight(){
window.open("https://nolight.vercel.app/");
}
function opensahayatri(){
window.open("https://sahayatri.vercel.app/");
}
function opensapiens(){
window.open("https://sapienshris.vercel.app/");
}
function openresume(){
window.open("https://resumebuilder-lake.vercel.app/");
}





var name1 = document.getElementById("name1");
var aboutme = document.getElementById("aboutme");
var techskills = document.getElementById("techskills");
var projectnolight = document.getElementById("projectnolight");
var contactme = document.getElementById("contactme");

function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

name1.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
name1.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor');
    followCursor.style.display='block';
};

name1.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor');
        followCursor.style.display='none';
};


////About Me Section Moving Animation


function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

aboutme.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor1');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
aboutme.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor1');
    followCursor.style.display='block';
};

aboutme.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor1');
        followCursor.style.display='none';
};

//skills

function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

techskills.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor2');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
techskills.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor2');
    followCursor.style.display='block';
};

techskills.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor2');
        followCursor.style.display='none';
};

//nolight

function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

projectnolight.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor3');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
projectnolight.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor3');
    followCursor.style.display='block';
};

projectnolight.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor3');
        followCursor.style.display='none';
};


//sahayatri
function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

projectsahayatri.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor4');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
};
projectsahayatri.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor4');
    followCursor.style.display='block';
};

projectsahayatri.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor4');
        followCursor.style.display='none';
};

// contactme
function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

contactme.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor5');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
    
};
contactme.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor5');
    followCursor.style.display='block';
};

contactme.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor5');
        followCursor.style.display='none';
};


//sapiens

var projectsapiens =document.getElementById("projectsapiens");
function changeCursor(event) {
    event.target.style.cursor = "pointer";
}

projectsapiens.onmousemove = function(event) {
    var followCursor = document.getElementById('followCursor6');
    followCursor.style.left = (event.clientX + 10) + 'px'; 
    followCursor.style.top = (event.clientY + 10) + 'px'; 
    
};
projectsapiens.onmouseenter = function(event) {
    var followCursor = document.getElementById('followCursor6');
    followCursor.style.display='block';
};

projectsapiens.onmouseleave = function(event) {

        var followCursor = document.getElementById('followCursor6');
        followCursor.style.display='none';
};


//sapiens





