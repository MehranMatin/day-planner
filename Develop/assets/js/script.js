// displays the current date on page
var today = new Date();
var currentDate = $('#currentDate');
currentDate.text(today.toLocaleDateString());

// current hour adds css class to element
var hour = today.getHours();
$('#_' + hour).addClass('present');

// save to local storage
function saveEvent() {
    var row = $(this).closest('.row');
    var hour = row.attr('id');
    var event = row.find('textarea').val();

    localStorage.setItem(hour, event);
}

// load from local storage
function getEvents() {
    $('.row').each((i, row) => {
        var hour = $(row).attr('id');
        var event = localStorage.getItem(hour);

        if (event) {
            $(row).find('textarea').val(event);
        }
    });
}

getEvents();

// event listeners for save button
$('button').each((i, button) => {
    $(button).click(saveEvent);
});