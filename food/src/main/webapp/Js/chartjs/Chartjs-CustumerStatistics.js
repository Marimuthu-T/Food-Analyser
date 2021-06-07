

function setDataforcustomerbycount(ByStream) {
    return {
    datasets: [{
        backgroundColor: backgroundColorCategory,
        data: ByStream.Foodordercount,
        borderColor: 'rgba(0,0,0,0.1)',        
        borderWidth: '1'
    }],
        labels: ByStream.Custumername,
    };
}

var DataforCustomerbycount = setDataforcustomerbycount(custumerbyfoodcount);

var optionsforCustomerbycount = {  
	title: { display: true, text: 'Customer  by foodBrought', fontSize: '24', fontFamily: "'Roboto', sans-serif",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',
    labels:
    {
       fontColor: "white"
    }},
    cutoutPercentage: 50
}
var ChartIDcustumerbyFoodCount = document.getElementById('custumerbyFoodCount').getContext('2d');
ChartforChartIDcustumerbyFoodCount = new Chart(ChartIDcustumerbyFoodCount ,{ type: 'doughnut', data: DataforCustomerbycount, options: optionsforCustomerbycount});






function setdataforCustomerbyLocation(ByStream)
{
	return {
  labels:ByStream.locationname,
  datasets: [{
    data: ByStream.custumercount,
    backgroundColor: backgroundColorCategory,    
    pointBorderColor: backgroundColorCategory,
    borderColor: 'pink',
    borderWidth: '3'
  }]
};
}

var optionsforCustomerbyLocation = {  
	title: { display: true, text: 'CustumerCount  by location', fontSize: '24', fontFamily: "'Roboto', 'sans-serif'",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',
    labels:
    {
       fontColor: "white"
    }},
}

var dataforCustomerbyLocation=setdataforCustomerbyLocation(custumerbylocation);

var CardIdcustumerbyLocation= document.getElementById('custumerbyLocation').getContext('2d');
ChartforCardIdcustumerbyLocation = new Chart(CardIdcustumerbyLocation ,{ type: 'polarArea', data: dataforCustomerbyLocation , options: optionsforCustomerbyLocation});





function setdataForCustomerByRevenue(ByStream1,ByStream2)
{
	return {
  labels:ByStream1.Custumername,
  datasets: [{
  label:'TotalRevenue',
    data: ByStream1.revenue,
    backgroundColor: bgC.green,
  },
  {
   label:'TotalFoodcount',
    data: ByStream2.Foodordercount,
    backgroundColor: bgC.violett,
  }
  ]
};
}

var optionsForCustomerByRevenue = {  
	title: { display: true, text: 'Customer Count  by Revenue', fontSize: '24', fontFamily: "'Roboto', sans-serif",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',
    labels:
    {
       fontColor: "white"
    }},
}

var dataForCustomerByRevenue=setdataForCustomerByRevenue(custumerbyRevenue,custumerbyfoodcount);

var ChartIDcustumerbyRevenue= document.getElementById('custumerbyRevenue').getContext('2d');
ChartforChartIDcustumerbyRevenue = new Chart(ChartIDcustumerbyRevenue ,{ type: 'line', data: dataForCustomerByRevenue , options: optionsForCustomerByRevenue});




document.getElementById("custumerbyFoodCount").onclick = function(evt)
{   
    var activePoints =ChartforChartIDcustumerbyFoodCount.getElementsAtEvent(evt);
    if(activePoints.length > 0)
    {
      var clickedElementindex = activePoints[0]["_index"];

      var label = ChartforChartIDcustumerbyFoodCount.data.labels[clickedElementindex];
    
      var value = ChartforChartIDcustumerbyFoodCount.data.datasets[0].data[clickedElementindex];
      window.location="Custumerfromchart.jsp?customername="+label+"&count="+value;
   }
}




function setdataforfoodcountbyLocation(ByStream)
{
	return {
  labels:ByStream.LocationName,
  datasets: [{
    data: ByStream.Foodordercount,
    backgroundColor: backgroundColorCategory,    
    pointBorderColor: backgroundColorCategory,
    borderColor: 'pink',
    borderWidth: '3'
  }]
};
}

var optionsdataforfoodcountbyLocation = {  
	title: { display: true, text: 'foodCount  by location', fontSize: '24', fontFamily: "'Roboto', 'sans-serif'",fontColor: "white"},
    legend: { display: true, position: 'right', align: 'center',
    labels:
    {
       fontColor: "white"
    }},
}

var dataforfoodcountbyLocation=setdataforfoodcountbyLocation(ordercountbylocation);

var CardIdcustumerbyareaandfoodcount= document.getElementById('custumerbyareaandfoodcount').getContext('2d');
ChartforCardIdcustumerbyareaandfoodcount = new Chart(CardIdcustumerbyareaandfoodcount ,{ type: 'polarArea', data: dataforfoodcountbyLocation , options: optionsdataforfoodcountbyLocation});

