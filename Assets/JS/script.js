// DATE & TIME CONVERSIONS
var currentTime = moment();
var hourNow = moment("h");
var today = moment();
var militTime = moment().format("HH");
var time = moment();
var currentTime = moment();

$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

$("#currentTime").text(time.format("h:mm:ss A"));

$("#currentTimeDisplay").text(today.format("hh:mm:ss"));

// IDs MADE FOR COLORING
var eightMorning = document.getElementById("8");
var accomplish8 = document.getElementById("8A");
var save8 = document.getElementById("8B");

var nineMorning = document.getElementById("9");
var accomplish9 = document.getElementById("9A");
var save9 = document.getElementById("9B");

var tenMorning = document.getElementById("10");
var accomplish10 = document.getElementById("10A");
var save10 = document.getElementById("10B");

var elevenMorning = document.getElementById("11");
var accomplish11 = document.getElementById("11A");
var save11 = document.getElementById("11B");

var twelveAfternoon = document.getElementById("12");
var accomplish12 = document.getElementById("12A");
var save12 = document.getElementById("12B");

var oneAfternoon = document.getElementById("13");
var accomplish1 = document.getElementById("13A");
var save1 = document.getElementById("13B");

var twoAfternoon = document.getElementById("14");
var accomplish2 = document.getElementById("14A");
var save2 = document.getElementById("14B");

var threeAfternoon = document.getElementById("15");
var accomplish3 = document.getElementById("15A");
var save3 = document.getElementById("15B");

var fourAfternoon = document.getElementById("16");
var accomplish4 = document.getElementById("16A");
var save4 = document.getElementById("16B");

var fiveAfternoon = document.getElementById("17");
var accomplish5 = document.getElementById("17A");
var save5 = document.getElementById("17B");


// COLOR CODING FUNCTIONALITY
timeArray = [8,9,10,11,12,13,14,15,16,17];

timeArray.forEach(element => { 
   
            if (militTime > timeArray[0]){
                eightMorning.style.backgroundColor = "red";
                accomplish8.style.backgroundColor = "red";
                save8.style.backgroundColor = "red";}
            else if (militTime = timeArray[0]){
                eightMorning.style.backgroundColor = "yellow";
                accomplish8.style.backgroundColor = "yellow";
                save8.style.backgroundColor = "yellow";}
            else {
                eightMorning.style.backgroundColor = "green";
                accomplish8.style.backgroundColor = "green";
                save8.style.backgroundColor = "green";}

            if (militTime > timeArray[1]){
                nineMorning.style.backgroundColor = "red";
                accomplish9.style.backgroundColor = "red";
                save9.style.backgroundColor = "red";}
            else if (militTime = timeArray[1]){
                nineMorning.style.backgroundColor = "yellow";
                accomplish9.style.backgroundColor = "yellow";
                save9.style.backgroundColor = "yellow";}
            else {
                nineMorning.style.backgroundColor = "green";
                accomplish9.style.backgroundColor = "green";
                save9.style.backgroundColor = "green";}

            if (militTime > timeArray[2]){
                tenMorning.style.backgroundColor = "red";
                accomplish10.style.backgroundColor = "red";
                save10.style.backgroundColor = "red";}
           else if (militTime = timeArray[2]){
                tenMorning.style.backgroundColor = "yellow";
                accomplish10.style.backgroundColor = "yellow";
                save10.style.backgroundColor = "yellow";}
            else {
                tenMorning.style.backgroundColor = "green";
                accomplish10.style.backgroundColor = "green";
                save10.style.backgroundColor = "green";}

            if (militTime > timeArray[3]){
                elevenMorning.style.backgroundColor = "red";
                accomplish11.style.backgroundColor = "red";
                save11.style.backgroundColor = "red";}
            else if (militTime = timeArray[3]){
                elevenMorning.style.backgroundColor = "yellow";
                accomplish11.style.backgroundColor = "yellow";
                save11.style.backgroundColor = "yellow";}
            else {
                elevenMorning.style.backgroundColor = "green";
                accomplish11.style.backgroundColor = "green";
                save11.style.backgroundColor = "green";}

            if (militTime > timeArray[4]){
                twelveAfternoon.style.backgroundColor = "red";
                accomplish12.style.backgroundColor = "red";
                save12.style.backgroundColor = "red";}
            else if (militTime = timeArray[4]){
                twelveAfternoon.style.backgroundColor = "yellow";
                accomplish12.style.backgroundColor = "yellow";
                save12.style.backgroundColor = "yellow";}
            else {
                twelveAfternoon.style.backgroundColor = "green";
                accomplish12.style.backgroundColor = "green";
                save12.style.backgroundColor = "green";}
                
            if (militTime > timeArray[5]){
                oneAfternoon.style.backgroundColor = "red";
                accomplish1.style.backgroundColor = "red";
                save1.style.backgroundColor = "red";}
           else if (militTime = timeArray[5]){
                oneAfternoon.style.backgroundColor = "yellow";
                accomplish1.style.backgroundColor = "yellow";
                save1.style.backgroundColor = "yellow";}
            else {
                oneAfternoon.style.backgroundColor = "green";
                accomplish1.style.backgroundColor = "green";
                save1.style.backgroundColor = "green";}
                
            if (militTime > timeArray[6]){
                twoAfternoon.style.backgroundColor = "red";
                accomplish2.style.backgroundColor = "red";
                save2.style.backgroundColor = "red";}
            else if (militTime = timeArray[6]){
                twoAfternoon.style.backgroundColor = "yellow";
                accomplish2.style.backgroundColor = "yellow";
                save2.style.backgroundColor = "yellow";}
            else {
                twoAfternoon.style.backgroundColor = "green";
                accomplish2.style.backgroundColor = "green";
                save2.style.backgroundColor = "green";}

            if (militTime > timeArray[7]){
                threeAfternoon.style.backgroundColor = "red";
                accomplish3.style.backgroundColor = "red";
                save3.style.backgroundColor = "red";}
            else if (militTime = timeArray[7]){
                threeAfternoon.style.backgroundColor = "yellow";
                accomplish3.style.backgroundColor = "yellow";
                save3.style.backgroundColor = "yellow";}
            else {
                threeAfternoon.style.backgroundColor = "green";
                accomplish3.style.backgroundColor = "green";
                save3.style.backgroundColor = "green";}

            if (militTime > timeArray[8]){
                fourAfternoon.style.backgroundColor = "red";
                accomplish4.style.backgroundColor = "red";
                save4.style.backgroundColor = "red";}
            else if (militTime = timeArray[8]){
                fourAfternoon.style.backgroundColor = "yellow";
                accomplish4.style.backgroundColor = "yellow";
                save4.style.backgroundColor = "yellow";}
            else {
                fourAfternoon.style.backgroundColor = "green";
                accomplish4.style.backgroundColor = "green";
                save4.style.backgroundColor = "green";}

            if (militTime > timeArray[9]){
                fiveAfternoon.style.backgroundColor = "red";
                accomplish5.style.backgroundColor = "red";
                save5.style.backgroundColor = "red";}
            else if (militTime = timeArray[9]){
                fiveAfternoon.style.backgroundColor = "yellow";
                accomplish5.style.backgroundColor = "yellow";
                save5.style.backgroundColor = "yellow";}
            else {
                fiveAfternoon.style.backgroundColor = "green";
                accomplish5.style.backgroundColor = "green";
                save5.style.backgroundColor = "green";}

                console.log(militTime)
    })

    var firstSaveButton = document.getElementById("firstSaveButton");

firstSaveButton.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); })
{console.log("present")} ;
firstSaveButton.addEventListener("click", function() {console.log("future")} )

nineMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
tenMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
elevenMorning.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
twelveAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
oneAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
twoAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
threeAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
fourAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });
fiveAfternoon.addEventListener("click", function() { sessionStorage. setItem('clicked', 'true'); });


// const d = new Date();