
function showTable (dataset) {
    const theData = dataset;
    console.log(theData)
    var tbody = d3.select("tbody");

    theData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
    });
});
};

showTable(data);
function showValue () {
   d3.select("tbody").remove();
   // create a new tbody
   d3.select("table").append("tbody");
   var obj = document.getElementById("datetime");


    function filteredData(sighting) {
        return sighting.datetime == obj.value
    };
    theData = data.filter(filteredData);
    console.log(theData)
    showTable(theData);
};