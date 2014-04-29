/**
 * @author
 */
console.log ("Javascript loaded");

function dataLoad(MTADATA) {

	console.log(MTADATA);

var myObsData = MTADATA.observations;
	//I am trying to construct an array of arrays
	var myDataArray = [];

	var headerArray = ["Date", "Value"];
	myDataArray.push(headerArray);

	//Define start point, end point and number of data points (how many loops)
	for (var i = 0; i < myObsData.length; i++) {

		var currObj = myObsData[i];

		var currArray = [currObj.date, Number(currObj.value)];

		myDataArray.push(currArray);

	}//end of for loop

	console.log(myDataArray);

	//feed data to visualization library
	var myDataTable = google.visualization.arrayToDataTable(myDataArray);

	//Tell it to create a line chart, and give it the location
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));

	var options = {
          title: "MTA Ridership"
        };

	myChart.draw(myDataTable, options);

}
function loadData(){

$.get("MTADATA.json", dataLoad , "json");

}

function loadPage(){
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData"});
}

$(document).ready(loadPage);