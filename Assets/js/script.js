// show current day and time
function currentDay(){
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var updatTime = setTimeout(function() {currentDay()}, 1000);
    var addDateTime = $('#currentDay').append(todayDate); 
    addDateTime
    

    
    
}
currentDay();
