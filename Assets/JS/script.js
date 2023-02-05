var eightMorning = document.getElementById("8");
var nineMorning = document.getElementById("9");
var tenMorning = document.getElementById("10");
var elevenMorning = document.getElementById("11");
var twelveAfternoon = document.getElementById("12");
var oneAfternoon = document.getElementById("13");
var twoAfternoon = document.getElementById("14");
var threeAfternoon = document.getElementById("15");
var fourAfternoon = document.getElementById("16");
var fiveAfternoon = document.getElementById("17");

var currentTime = moment();
var hourNow = moment("h");

var colorChange= document.getElementById("timeBlock").innerHTML = Date();
var tenSave = document.getElementById("saveButton10");

var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

var militTime = moment().format("HH");
console.log(militTime)

var currentTime = moment();
$("#currentTimeDisplay").text(today.format("h:mm:ss"));

const d = new Date();

function displayColors() {

    for (var i = 8; i < 17; i++) 
    {
        var timeBlock = document.getElementById(i);
        console.log((timeBlock.id))

        if (militTime > parseInt(timeBlock.id))
        {timeBlock.classList.add("past")} 

        else if (militTime == parseInt(timeBlock.id)) 
        {console.log("present")} 

        else if (militTime < parseInt(timeBlock.id)) 
        {console.log("future")}

    }
   
}

tenSave.addEventListener("click", displayColors())

function displayTimeOnPage (){
    eightMorning.textContent = today.format("h:mm:ss");
    nineMorning.textContent = currentTime;
    tenMorning.textContent = currentTime;
}

displayTimeOnPage();



eightMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); })
{console.log("present")} ;
nineMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
tenMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
elevenMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
twelveAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
oneAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
twoAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
threeAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
fourAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
fiveAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });

eightMorning.addEventListener("click", function() {console.log("future")} )


// function backgroundColorEdit(){
//         if (hourNow == currentTime){
//             document.getElementById("timeBlock").style.backgroundColor = "#ff0000";
//         }else if (hourNow < currentTime){
//             document.getElementsByClassName("timeBlock").style.backgroundColor = "#d3d3d3";
//         }else 
//         {
//             document.getElementsByClassName("timeBlock").style.backgroundColor = "#90ee90";
//         }
// }
// backgroundColorEdit();