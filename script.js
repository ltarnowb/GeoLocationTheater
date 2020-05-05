//Global Var

//nav buttons
var homeNav = document.getElementById("home");
var perNav = document.getElementById("per");
var locNav = document.getElementById("loc");
//var abtNav = document.getElementById("abt");


//content div
var abtDiv = document.getElementById("aboutDiv");
var perDiv = document.getElementById("perDiv");
var locDiv = document.getElementById("prezDiv");
//var vidDiv = document.getElementById("vidDiv");

var vid = document.getElementById("vid");
// var wel = document.getElementById("wel");

// var welcome = "https://www.youtube.com/embed/lojuls2PmYs"; 
// wel.src = welcome;

var locTBD = "notavail.jpg";


//0: Crash Course 1: SNL 2: Sleep No More 3: tech quickie
var locations = ["https://www.youtube.com/embed/W567e9o8ljQ","https://www.youtube.com/embed/2f7tmS1oig4","https://www.youtube.com/embed/W567e9o8ljQ","https://www.youtube.com/embed/-pUz9fIwvxk"];

var cLong;

var cLat;

//0: home 1: baird 2: pier 3: Dubai
var latArr = [43.000437, 42.907082, 42.954447, 25.099438];

var longArr = [-78.781884, -78.902606, -78.832048, 55.256597];



var delLat = .000697;

var delLong = .000940;

var geo;
var watchID;

window.onload = geoUpdate();

//Navigation Bar Interface
function homeNv(event){
    console.log("home");
    //vidDiv.style.display = "none"; 
    perDiv.style.display = "none";
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "inline-block";
}

function perNv(event){
    console.log("performance");
    //vidDiv.style.display = "none"; 
    perDiv.style.display = "block";
    prezDiv.style.display = "none"; 
    abtDiv.style.display = "none";
}

function locNv(event){
    console.log("location");
    //vidDiv.style.display = "none"; 
    perDiv.style.display = "none";
    prezDiv.style.display = "block"; 
    abtDiv.style.display = "none";
}

// function abtNv(event){
//     console.log("about");
//     vidDiv.style.display = "none";
//     perDiv.style.display = "none"; 
//     prezDiv.style.display = "none"; 
//     abtDiv.style.display = "inline-block";
// }

homeNav.addEventListener("click", homeNv);

perNav.addEventListener("click", perNv);

locNav.addEventListener("click", locNv);

//abtNav.addEventListener("click", abtNv);

//Geolocation Script

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
        console.log("check");
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
            vid.src = locTBD;
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