var currentTime = moment();
var hourNow = moment("h");
console.log(currentTime)

var colorChange= document.getElementById("timeBlock").innerHTML = Date();

const d = new Date();

// var today = moment();
// console.log(today)
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss"));


click(function() { sessionStorage. setItem('clicked', 'true'); });


// var eightMorning = document.getElementById("eightAm");
// var nineMorning = document.getElementById("nineAm");
// var tenMorning = document.getElementById("tenAm");
// var timeWatch = moment().startOf('hour').fromNow();

function backgroundColorEdit(){
        if (hourNow == currentTime){
            document.getElementById("timeBlock").style.backgroundColor = "#ff0000";
        }else if (hourNow < currentTime){
            document.getElementsByClassName("timeBlock").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsByClassName("timeBlock").style.backgroundColor = "#90ee90";
        }
}
backgroundColorEdit();

// var currentTime = moment();
// $("#currentTimeDisplay").text(today.format("h:mm:ss"));

// function colorChange {
//     if(currentTime > 8) {

//     }
// }

// function pastTimes {
    
// }

// function displayTimeOnPage (){
//     eightMorning.textContent = today.format("h:mm:ss");
//     nineMorning.textContent = currentTime;
//     tenMorning.textContent = currentTime;
// }

// displayTimeOnPage();