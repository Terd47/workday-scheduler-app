// show current day and time
function currentDay(){
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var updatTime = setTimeout(function() {currentDay()}, 1000);
    var addDateTime = $('#currentDay').text(todayDate);
}
currentDay();

//work schedule time
var CurrentTime = moment().format('H');
console.log(CurrentTime);
var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var one = 13;
var two = 14;
var three = 15;
var four = 16;
var five = 17;

// color grade the time slots based on current time
//function for 9am
if(+CurrentTime === nine){
    $('#hour-9').addClass('present');
} else if(+CurrentTime > nine){
    $('#hour-9').addClass('past');
} else {
    $('#hour-9').addClass('future');
}
// 10 am
if(+CurrentTime === ten){
    $('#hour-10').addClass('present');
} else if(+CurrentTime > ten){
    $('#hour-10').addClass('past');
} else {
    $('#hour-10').addClass('future');
}
// 11 am
if(+CurrentTime === eleven){
    $('#hour-11').addClass('present');
} else if(+CurrentTime > eleven){
    $('#hour-11').addClass('past');
} else {
    $('#hour-11').addClass('future');
}
// 12 pm
if(+CurrentTime === twelve){
    $('#hour-12').addClass('present');
} else if(+CurrentTime > twelve){
    $('#hour-12').addClass('past');
} else {
    $('#hour-12').addClass('future');
}
// 1pm
if(+CurrentTime === one){
    $('#hour-13').addClass('present');
} else if(+CurrentTime > one){
    $('#hour-13').addClass('past');
} else {
    $('#hour-13').addClass('future');
}
// 2 pm
if(+CurrentTime === two){
    $('#hour-14').addClass('present');
} else if(+CurrentTime > two){
    $('#hour-14').addClass('past');
} else {
    $('#hour-14').addClass('future');
}
// 3pm
if(+CurrentTime === three){
    $('#hour-15').addClass('present');
} else if(+CurrentTime > three){
    $('#hour-15').addClass('past');
} else {
    $('#hour-15').addClass('future');
}
// 4 pm
if(+CurrentTime === four){
    $('#hour-16').addClass('present');
} else if(+CurrentTime > four){
    $('#hour-16').addClass('past');
} else {
    $('#hour-16').addClass('future');
}
// 5 pm 
if(+CurrentTime === five){
    $('#hour-17').addClass('present');
} else if(+CurrentTime > five){
    $('#hour-17').addClass('past');
} else {
    $('#hour-17').addClass('future');
}

// query local storage on page load and get items stored based on their keys
var event1 = "";
event1 = localStorage.getItem('event9');
$('#save9').text(event1);
var event2 = "";
event2 = localStorage.getItem('event10');
$('#save10').text(event2);
var event3 = "";
event3 = localStorage.getItem('event11');
$('#save11').text(event3);
var event4 = "";
event4 = localStorage.getItem('event12');
$('#save12').text(event4);
var event5 = "";
event5= localStorage.getItem('event1');
$('#save1').text(event5);
var event6 = "";
event6 = localStorage.getItem('event2');
$('#save2').text(event6);
var event7 = "";
event7 = localStorage.getItem('event3');
$('#save3').text(event7);
var event8 = "";
event8= localStorage.getItem('event4');
$('#save4').text(event8);
var event9 = "";
event9 = localStorage.getItem('event5');
$('#save5').text(event9);

// function to store event to local storage 

function saveToStorage (){
    var textArea = $('.description').val();
    
    if(textArea !== ""){ 
        // get text from textArea on html
    var getEvent9 = $('#save9').val();
    var getEvent10 = $('#save10').val();
    var getEvent11 = $('#save11').val();
    var getEvent12 = $('#save12').val();
    var getEvent1 = $('#save1').val();
    var getEvent2 = $('#save2').val();
    var getEvent3 = $('#save3').val();
    var getEvent4 = $('#save4').val();
    var getEvent5 = $('#save5').val();
 
    //store event to local storage

    localStorage.setItem("event9", getEvent9);
    localStorage.setItem("event10", getEvent10);
    localStorage.setItem("event11", getEvent11);
    localStorage.setItem("event12", getEvent12);
    localStorage.setItem("event1", getEvent1);
    localStorage.setItem("event2", getEvent2);
    localStorage.setItem("event3", getEvent3);
    localStorage.setItem("event4", getEvent4);
    localStorage.setItem("event5", getEvent5);

    }
}
saveToStorage();
 // on click function to save event when the save button is clicked 
$('.saveBtn').on('click', function(){
    console.log('I am Here');
    
    saveToStorage();
})
///// the End ///////
