var currentDay = $('#currentDay');
var today = new Date();
currentDay.text(today.toLocaleDateString());

// current hour adds bootstrap class to element
var hour = today.getHours();
$('#_' + hour).addClass('present');

// event listeners for save button
$('button').each((i, button) => {
    $(button).click(saveEvent);
});

function saveEvent() {
    var row = $(this).closest('.row');
    var hour = row.attr('id');
    var event = row.find('textarea').val();

    localStorage.setItem(hour, event);
}

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