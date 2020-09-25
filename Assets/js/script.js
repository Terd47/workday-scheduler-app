// show current day and time
function currentDay(){
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var updatTime = setTimeout(function() {currentDay()}, 1000);
    var addDateTime = $('#currentDay').text(todayDate);
}
currentDay();


var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var thirteen = 13;
var fourteen = 14;
var fifteen = 15;
var sixteen = 16;
var seventeen = 17;
var CurrentTime = moment().format('h');
console.log(CurrentTime);

console.log(typeof(+CurrentTime));
if(+CurrentTime == nine){
    $('#hour-9').addClass('present');
} else if(CurrentTime < nine){
    $('#hour-9').addClass('future');
}else {
    $('#hour-9').addClass('past');
}
if(+CurrentTime == ten){
    $('#hour-10').addClass('present');
} else if(CurrentTime < ten){
    $('#hour-10').addClass('future');
}else {
    $('#hour-10').addClass('past');
}
if(+CurrentTime == eleven){
    $('#hour-11').addClass('present');
} else if(CurrentTime < eleven){
    $('#hour-11').addClass('future');
}else {
    $('#hour-11').addClass('past');
}
if(+CurrentTime == twelve){
    $('#hour-12').addClass('present');
} else if(CurrentTime < twelve){
    $('#hour-12').addClass('future');
}else {
    $('#hour-12').addClass('past');
}
if(+CurrentTime == thirteen){
    $('#hour-13').addClass('present');
} else if(CurrentTime < thirteen){
    $('#hour-13').addClass('future');
}else {
    $('#hour-13').addClass('past');
}
if(+CurrentTime == fourteen){
    $('#hour-14').addClass('present');
} else if(CurrentTime < fourteen){
    $('#hour-14').addClass('future');
}else {
    $('#hour-14').addClass('past');
}
if(+CurrentTime == fifteen){
    $('#hour-15').addClass('present');
} else if(CurrentTime < fifteen){
    $('#hour-15').addClass('future');
}else {
    $('#hour-15').addClass('past');
}
if(+CurrentTime == sixteen){
    $('#hour-16').addClass('present');
} else if(CurrentTime < sixteen){
    $('#hour-16').addClass('future');
}else {
    $('#hour-16').addClass('past');
}
if(+CurrentTime == seventeen){
    $('#hour-17').addClass('present');
} else if(CurrentTime < seventeen){
    $('#hour-17').addClass('future');
}else {
    $('#hour-17').addClass('past');
}



function saveToStorage (){
    var textArea = $('.description').val();
    var  saveBtn = $('.saveBtn');
    var storage = window.localStorage;
    console.log(textArea);

    if(localStorage.getItem("textArea") != null){
        let workEvent = JSON.parse(localStorage.getItem("textArea"));
        workEvent.push({name, textArea});
        localStorage.setItem("textArea",JSON.stringify(workEvent));
        localStorage.getItem("textArea");
    } else {
        let workEvent = [{name, textArea}];
        localStorage.setItem("textArea", JSON.stringify(workEvent));
        workEvent.text();
    }
}
saveToStorage();

$('.saveBtn').on('click', function(){
    console.log('I am Here');
    saveToStorage();
})
