//Global Var

//nav buttons
var homeNav = document.getElementById("home");
var perNav = document.getElementById("per");
var locNav = document.getElementById("loc");
var abtNav = document.getElementById("abt");


//content div
var abtDiv = document.getElementById("aboutDiv");
var perDiv = document.getElementById("perDiv");
var locDiv = document.getElementById("prezDiv");
var vidDiv = document.getElementById("vidDiv");

var vid = document.getElementById("vid");
var wel = document.getElementById("wel");

var welcome = "https://www.youtube.com/embed/lojuls2PmYs"; 
wel.src = welcome;


//0: Crash Course 1: SNL 2: Sleep No More
var locations = ["https://www.youtube.com/embed/sNWrOuwzax8","https://www.youtube.com/embed/2f7tmS1oig4","https://www.youtube.com/embed/k12NZLh_Xvg"];

var cLong;

var cLat;

//0: home 1: baird 2: pier 
var latArr = [43.000437, 42.907082, 42.954447];

var longArr = [-78.781884, -78.902606, -78.832048];



var delLat = .000940;

var delLong = .000697;

var geo;
var watchID;

window.onload = geoUpdate();

//Navigation Bar Interface
function homeNv(event){
    console.log("home");
    vidDiv.style.display = "block"; 
    perDiv.style.display = "none";
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "none";
}

function perNv(event){
    console.log("performance");
    vidDiv.style.display = "none"; 
    perDiv.style.display = "block";
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "none";
}

function locNv(event){
    console.log("location");
    vidDiv.style.display = "none"; 
    perDiv.style.display = "none";
    prezDiv.style.display = "block"; 
    abtDiv.style.display = "none";
}

function abtNv(event){
    console.log("about");
    vidDiv.style.display = "none";
    perDiv.style.display = "none"; 
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "block";
}

homeNav.addEventListener("click", homeNv);

perNav.addEventListener("click", perNv);

locNav.addEventListener("click", locNv);

abtNav.addEventListener("click", abtNv);

//Geolocation Software
if('geolocation' in navigator){
    console.log("This works")
}else{
    console.log("This doesn't work.")
}


function getLocation() {
  if (navigator.geolocation) {
    return true;
  } else {
    console.log("Geolocation is not supported by this browser.");
    return false;
  }
}

function showPosition(position) {
  cLong = position.coords.longitude;
  cLat = position.coords.latitude;
  console.log("cLat: " + cLat);
  console.log("cLong: " + cLong);
  locationCheck();
}

function testLocation(){
    if(getLocation()){
        var location = navigator.geolocation.getCurrentPosition(showPosition, errorLocation);
        console.log();
    }
}

function errorLocation(){
    alert("Location not found");
}

function locationCheck(){
    for(var i = 0; i < latArr.length; i++){
        if((cLat >= (latArr[i] - delLat) && cLat <= (latArr[i]+delLat)) && (cLong >=(longArr[i]-delLong) && cLong <= (longArr[i]+delLong))){
                vid.src = locations[i];
                console.log(locations[i]);
                console.log(vid.src);
                console.log("Location: " + i);
                break;
        }else{
            vid.src = "welcome";
        }
    }
}

function geoUpdate(){
    if(navigator.geolocation){
        var options = {timeout: 60000};
        geo = navigator.geolocation;
        watchID = geo.watchPosition(testLocation,errorLocation,options);
    }
}