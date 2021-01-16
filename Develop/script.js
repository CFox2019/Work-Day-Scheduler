// Variables
var DateTime = luxon.DateTime;
var currentDate = DateTime.local().toLocaleString(DateTime.DATE_FULL)

// current date opens at page launch
$('#currentDay').text(currentDate)

// Daily calendar needs to show standard business hours

// Time blocks should be color-coded to indicate
// whether it is in the past, present, or future

// Clicking into a time block allows an event to be entered

// Clicking the save button for that time block will save that
// event in local storage

// Event should still be on the page when the page is refreshed