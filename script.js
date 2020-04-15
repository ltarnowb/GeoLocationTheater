//Global Var

var homeNav = document.getElementById("home");

var locNav = document.getElementById("loc");

var abtNav = document.getElementById("abt");

var abtDiv = document.getElementById("aboutDiv");

var locDiv = document.getElementById("prezDiv");

var vidDiv = document.getElementById("vidDiv");

if('geolocation' in navigator){
    console.log("This works")
}else{
    console.log("This doesn't work.")
}



function homeNv(event){
    console.log("home");
    vidDiv.style.display = "block"; 
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "none";
}

function locNv(event){
    console.log("location");
    vidDiv.style.display = "none"; 
    prezDiv.style.display = "block"; 
    abtDiv.style.display = "none";
}

function abtNv(event){
    console.log("about");
    vidDiv.style.display = "none"; 
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "block";
}

console.log(homeNav);
console.log(locNav);
console.log(abtNav);

homeNav.addEventListener("click", homeNv);

locNav.addEventListener("click", locNv);

abtNav.addEventListener("click", abtNv);