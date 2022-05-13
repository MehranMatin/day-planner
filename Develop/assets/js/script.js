var currentDay = $('#currentDay');
var today = new Date();
currentDay.text(today.toLocaleDateString());

var hour = today.getHours();
$('#_' + hour).addClass('present');