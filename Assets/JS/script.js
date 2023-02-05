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

// var colorChange= document.getElementById("timeBlock").innerHTML = Date();

var tenSave = document.getElementById("saveButton10");

var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment();
    $("#currentTime").text(time.format("h:mm:ss"));

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

        if (militTime > 9)
        {
            document.getElementById("eightAm").style.backgroundColor="red";
            document.getElementById("nineAm").style.backgroundColor="red";
            document.getElementById("tenAm").style.backgroundColor="red";
            document.getElementById("elevenAm").style.backgroundColor="red";
            document.getElementById("twelvePm").style.backgroundColor="red";
            document.getElementById("onePm").style.backgroundColor="red";
            document.getElementById("twoPm").style.backgroundColor="red";
            document.getElementById("threePm").style.backgroundColor="red";
            document.getElementById("fourPm").style.backgroundColor="red";
            document.getElementById("fivePm").style.backgroundColor="red";
            }
    }
}

tenSave.addEventListener("click", displayColors())


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
//     if (militTime == currentTime){
//         document.getElementById("timeBlock").style.backgroundColor = "yellow";
//         }
//     else if (militTime < currentTime){
//             document.getElementById("timeBlock").style.backgroundColor = "red";
//         }
//     else 
//         {
//             document.getElementById("timeBlock").style.backgroundColor = "green";
//         }
// }
// backgroundColorEdit();

 // else if (militTime == parseInt(timeBlock.id)) 
        // {
        //     document.getElementById("timeBlock2").style.backgroundColor = "yellow";
        //     }

        // else  (militTime < parseInt(timeBlock.id)) 
        // {
        //     document.getElementById("timeBlock").style.backgroundColor = "green";
        // }

        // function displayTimeOnPage (){
            //     eightAm.textContent = today.format("h:mm:ss");
            //     nineMorning.textContent = currentTime;
            //     tenMorning.textContent = currentTime;
            // }
            
            // displayTimeOnPage();
            