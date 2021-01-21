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
var dayEntries = JSON.parse(localStorage.getItem(currentDateString)) || {}


// current date displayed in header
$('#currentDay').text(currentDateString)

// Retrieve standard business hours and add a row to each hour
businessHours.forEach(element => {
    var containerRow = $('<div>', {id: `hour-${element.hour}`, class: "row"})

    var hourCol = $('<div>', {class: 'hour col-md-1'})
    var hour = element.toFormat('ha')
    hourCol.text(hour)

    var textareaCol = $('<textarea>', {class: 'col-md-10 textFill'})
    textareaCol.text(dayEntries[hour])
    //   - if time is in the past, color area should be gray
    if (element.hour < currentDate.hour) {
        textareaCol.addClass('past')
    //   - apply red to areas color when it is the current hour
    } else if (element.hour === currentDate.hour) {
        textareaCol.addClass('present')
    //   - if time is in the future, show green color in area
    } else if (element.hour > currentDate.hour) {
        textareaCol.addClass('future')
    }

    var buttonCol = $('<button>', {class: 'saveBtn col-md-1 save btn'})
    buttonCol.append($('<i>', {class: 'fas fa-lock'}))
    buttonCol.on('click', () => {
        var textareaEntry = textareaCol.val()
        dayEntries[hour] = textareaEntry
        localStorage.setItem(currentDateString, JSON.stringify(dayEntries))
    })

    containerRow.append(hourCol)
    containerRow.append(textareaCol)
    containerRow.append(buttonCol)

    $('#table').append(containerRow)
});
