// from data.js
var tableData = data;
console.log(tableData);

var body = d3.select("body");

tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);

    var row = tbody.append("row");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


var buttonClick = d3.select("buttonClick");
buttonClick.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    var row = tbody.append("row");

    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});
});