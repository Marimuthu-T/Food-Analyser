/**
 * 
 */

console.log("script");

function setDatafoodbyrate(ByStream) {
    return {
    datasets: [{
        backgroundColor: backgroundColorCategory,
        data: ByStream.rate,
        borderColor: 'rgba(0,0,0,0.1)',
        
        borderWidth: '1'
    }],
        labels: ByStream.foodname,
    };
}

var Datafoodbyrate = setDatafoodbyrate(foodbyrate);


var optionsfoodbyrate = {
    title: { display: true, text: 'Food by rate', fontSize: '24', fontFamily: "'Roboto', sans-serif",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',fontSize: 30,
    labels:
    {
       fontColor: "white"
    } },
    cutoutPercentage:50
}
var Pieforrate = document.getElementById('FoodbasedOnRate').getContext('2d');
PieChart1 = new Chart(Pieforrate, { type: 'doughnut', data: Datafoodbyrate, options: optionsfoodbyrate});




function setDataEC2(ByStream) {
    return {
    
    labels: ByStream.foodname,
    datasets: [{
         labels: ByStream.foodname,
        backgroundColor: backgroundColorCategory,
        data: ByStream.count,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: '1'
    }]
    };
}

var DataEC2 = setDataEC2(foodGroupedBycount);


var optionsEC2 = {
    title: { display: true, text: 'Food by count', fontSize: '24', fontFamily: "'Roboto', sans-serif",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',fontColor: "white",
    labels:
    {
       fontColor: "white"
    }},
    labels:
    {
       fontColor: "white"
    }
}

var Pieforfoodbycount = document.getElementById('food by count').getContext('2d');
PieChart2 = new Chart(Pieforfoodbycount, { type: 'bar', data: DataEC2, options: optionsEC2});


var DataEPM = {
    datasets: [{
      label: 'Food ordered by area',
      borderColor: 'rgb(1,206,145)',
      backgroundColor: 'rgba(1,206,145, 0.2)',
      borderWidth: '2',
      data:foodbyarea.Foodordercount
    }],
    labels: foodbyarea.areaname
}

var optionsEPM = {
    title: { display: true, text: 'Food count by locations', fontSize: '24', fontFamily: "'Roboto', sans-serif",fontColor: "white"},
    legend: { display: false ,fontColor: "white",
    labels:
    {
       fontColor: "white"
    }},
    scale: { 
        gridLines: {color: 'white'},
        ticks: {max: 280, min: 40, stepSize: 40},
        pointLabels: { fontSize: '16', fontColor:"white"}
    }
}

var Polar = document.getElementById('areawisecount').getContext('2d');
var PolarChart = new Chart(Polar, { type: 'radar', data: DataEPM, options: optionsEPM});




document.getElementById("FoodbasedOnRate").onclick = function(event)
{   
    var activePoints =PieChart1.getElementsAtEvent(event);
    
    
    if(activePoints.length > 0)
    {
      var clickedElementindex = activePoints[0]["_index"];

      var label = PieChart1.data.labels[clickedElementindex];
    
      var value = PieChart1.data.datasets[0].data[clickedElementindex];
      window.location="foodDetails.jsp?foodname="+label;
    }
   
}


document.getElementById("food by count").onclick = function(event)
{   
    var activePoints =PieChart2.getElementsAtEvent(event);
    
    alert("!");
    if(activePoints.length > 0)
    {
      var clickedElementindex = activePoints[0]["_index"];

      var label = PieChart2.data.labels[clickedElementindex];
    
      var value = PieChart2.data.datasets[0].data[clickedElementindex];
      window.location="foodDetails.jsp?foodname="+label;
    }
   
}



    