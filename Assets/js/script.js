// show current day and time
function currentDay(){
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var updatTime = setTimeout(function() {currentDay()}, 1000);
    var addDateTime = $('#currentDay').text(todayDate);
}
currentDay();
var CurrentTime = moment().format('hA');
workSchedule = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM','3PM','4PM','5PM'];

for (var i = 0; i < workSchedule.length; i++){
    if(CurrentTime == workSchedule[i]){
        $('.time-block').addClass('present');
    } else if (CurrentTime < workSchedule[i]){
        $('.time-block').addClass('future');
    } else{
        $('.time-block').addClass('past');
    }
}

var event1 = "";
event1 = localStorage.getItem('event9');
$('#save9').text(event1);
var event2 = "";
event2 = localStorage.getItem('event10');
$('#save10').text(event2);
var event3 = "";
event3 = localStorage.getItem('event11');
$('#save11').text(event3);
var event4= "";
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

function saveToStorage (){
    var textArea = $('.description').val();
    
    if(textArea !== ""){
    var getEvent9 = $('#save9').val();
    var getEvent10 = $('#save10').val();
    var getEvent11 = $('#save11').val();
    var getEvent12 = $('#save12').val();
    var getEvent1 = $('#save1').val();
    var getEvent2 = $('#save2').val();
    var getEvent3 = $('#save3').val();
    var getEvent4 = $('#save4').val();
    var getEvent5 = $('#save5').val();

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
    
    //console.log(storageItem);
}
saveToStorage();

$('.saveBtn').on('click', function(){
    console.log('I am Here');
    
    saveToStorage();
})
