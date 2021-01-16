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
    currentDate.set({hour: 18, minute: 0}),
]

var b = currentDate.set({hour: 13, minute: 0}).toLocaleString(DateTime.TIME_SIMPLE)
console.log(b)

// current date opens at page launch
$('#currentDay').text(currentDateString)

// Retrieve standard business hours
// If hours are outside of business hours, do not show


// Time blocks should be color-coded to indicate
// whether it is in the past, present, or future                                         
// If time blocks are in the past, color should be grey,
// If time block is present time, show in red,
// If time block is in the future, show in green


// Clicking into a time block allows an event to be entered

// Clicking the save button for that time block will save that
// event in local storage

// Event should still be on the page when the page is refreshed