// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` UFO sighting object and use d3 to append 1 cell per sighting to the table
data.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    
    Object.entries(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});



// Getting a reference to the input element on the page with the id property set to 'input-field'
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    //Clear Table
    var table = document.getElementById("ufo-table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Use the form input to filter the data by blood type
    var result = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(result);

    
    //Append Filtered Data
    result.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        
        Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
