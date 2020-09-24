// show current day and time
function currentDay(){
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var updatTime = setTimeout(function() {currentDay()}, 1000);
    var addDateTime = $('#currentDay').text(todayDate);
}
currentDay();


var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var timeSlots = $('.time-block');
var CurrentTime = moment().format('h a');

var workHours = [];
workHours = $('.col-md-1').text();

console.log(workHours);


// get current time and compare with value in scheduler
function  timeOfDay(){
    var workSchedule = ""
    var getScheduleTime = $('.time-block');
    
    console.log(CurrentTime);

}
timeOfDay(); 

function saveToStorage (){
    var textArea = $('.description').val();
    var  saveBtn = $('.saveBtn');
    var storage = window.localStorage;
    console.log(textArea);

    if(localStorage.getItem("textArea") != null){
        let workEvent = JSON.parse(localStorage.getItem("textArea"));
        workEvent.push({name, textArea});
        localStorage.setItem("textArea",JSON.stringify(workEvent));
    } else {
        let workEvent = [{name, textArea}];
        localStorage.setItem("textArea", JSON.stringify(workEvent));
        workEvent.val();
    }


}
saveToStorage();


$('.saveBtn').on('click', function(){
    console.log('I am Here');
    saveToStorage();
})
