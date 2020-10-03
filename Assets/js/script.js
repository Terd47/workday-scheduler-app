function today(){
    var showDate = $('#currentDay');
    var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    showDate.append(todayDate);

    console.log(todayDate);

}