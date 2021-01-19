// Variables
var DateTime = luxon.DateTime
var currentDate = DateTime.local()
var currentDateString = currentDate.toLocaleString(DateTime.DATE_FULL)
var currentTimeString = currentDate.toLocaleString(DateTime.TIME_SIMPLE)
var businessHours = [
    currentDate.set({hour: 8, minute: 0}),
    currentDate.set({hour: 9, minute: 0}),
    currentDate.set({hour: 10, minute: 0}),
    currentDate.set({hour: 11, minute: 0}),
    currentDate.set({hour: 12, minute: 0}),
    currentDate.set({hour: 13, minute: 0}),
    currentDate.set({hour: 14, minute: 0}),
    currentDate.set({hour: 15, minute: 0}),
    currentDate.set({hour: 16, minute: 0}),
    currentDate.set({hour: 17, minute: 0}),
    currentDate.set({hour: 18, minute: 0})
]

// current date displayed in header
$('#currentDay').text(currentDateString)

// Retrieve standard business hours
businessHours.forEach(element => {
    var containerRow = $('<div>', {id: `hour-${element.hour}`, class: "row"})

    var hourCol = $('<div>', {class: 'hour col-md-1'})
    hourCol.text(element.toLocaleString(DateTime.TIME_SIMPLE))

    var textareaCol = $('<textarea>', {class: 'past col-md-10 textFill'})
    // Logic:
    //   - if there are no saved entries for this time, and time is in the past, color area should be gray
    //   - if there is a saved entry for this time, show it and apply red to areas color
    //   - if there are no saved entries for this time, and the time is in the future, show green color in area

    var buttonCol = $('<button>', {class: 'saveBtn col-md-1 save btn'})
    buttonCol.text('SAVE')

    containerRow.append(hourCol)
    containerRow.append(textareaCol)
    containerRow.append(buttonCol)

    $('#table').append(containerRow)
});

// Clicking into a time block allows an event to be entered

// Clicking the save button for that time block will save that
// event in local storage

// Event should still be on the page when the page is refreshed