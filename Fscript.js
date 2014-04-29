/**
 * @author
 */

function dataLoad(MTADATA){
console.log(MTADATA);

//4) I will now add my datatable to the visualization using the Google Viz API
var gTable = new google.visualization.DataTable();
gTable.addColumn('string', MTADATA.columns[0]);
gTable.addColumn('number', MTADATA.columns[1]);
gTable.addColumn('number', MTADATA.columns[2]);
gTable.addColumn('number', MTADATA.columns[3]);
gTable.addColumn('number', MTADATA.columns[4]);
gTable.addColumn('number', MTADATA.columns[5]);
gTable.addRows(MTADATA.rows);

//5) Now I will create the chart, and tell the program to put the chart in my div	
var gChart = new google.visualization.LineChart(document.getElementById("chartDiv"));
//Options tag
var gchartOptions = {
          title: "MTA Ridership", 
        };
//6) And finally, we draw the chart
gChart.draw(gTable, gchartOptions);

}

function loadData(){

$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1LImdzcbNrHYOfMdUoZ1saTywrSsXIC2kK-rJkqG9&key=AIzaSyCzc9XKi4CG-PcqBZfHBmc3fKmuq3JH9vU", dataLoad , "json");

}

function loadPage(){
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData"});
}

$(document).ready(loadPage);