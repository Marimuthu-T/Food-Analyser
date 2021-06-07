
var balance = 2000;

console.log("Enterred!!"+balance);

var foodorderData = [                 
	   {'date': new Date('01/02/2020'),'area':'pollachi','foodname' : 'Biriyani','custumername':'ravi','rate':120,'count':140},
	   {'date': new Date('01/09/2020'),'area':'abc colony','foodname' : 'dosa','custumername':'ram','rate':25,'count':40},
	   {'date': new Date('01/09/2020'),'area':'abc colony','foodname' : 'indly','custumername':'ramesh','rate':20,'count':30},
	   {'date': new Date('01/06/2020'),'area':'sundrapuram','foodname' : 'burger','custumername':'ram','rate':45,'count':50},
	   {'date': new Date('01/10/2020'),'area':'pollachi','foodname' : 'puff','custumername':'raesh','rate':15,'count':70},
	   {'date': new Date('01/01/2020'),'area':'senjeri','foodname' : 'chappathi','custumername':'rahul','rate':30,'count':80},
	   {'date': new Date('01/09/2020'),'area':'ml puram','foodname' : 'rice','custumername':'satheesh','rate':50,'count':100},
	   {'date': new Date('01/10/2020'),'area':'negamam','foodname' : 'chinees','custumername':'pradeesh','rate':60,'count':75},
	   {'date': new Date('01/01/2020'),'area':'sundrapuram','foodname' : 'friedrice','custumername':'satheesh','rate':45,'count':90},
	   {'date': new Date('01/10/2020'),'area':'pollachi','foodname' : 'noodles','custumername':'ram','rate':30,'count':80},
	   {'date': new Date('01/04/2020'),'area':'senjeri','foodname' : 'cholapoori','custumername':'ravi','rate':35,'count':65},
];                                     

console.log(JSON.stringify(foodorderData));
var bgC = {'red': "rgba(255, 99, 132, 0.7)", 'orange': "rgba(255, 159, 64, 0.7)", 'yellow': "rgba(255, 205, 86, 0.7)", 'green': "rgba(75, 192, 192, 0.7)", 'blue': "rgba(54, 162, 235,0.7)", 'violett': "rgba(153, 102, 255, 0.7)", 'grey': "rgba(201, 203, 207, 0.7)"};
var backgroundColorCategory = [bgC.red, bgC.orange, bgC.yellow, bgC.green, bgC.blue, bgC.violett, bgC.grey,bgC.red, bgC.orange, bgC.yellow, bgC.green,bgC.red];
var cssColors =     {'first-bg-color':  '#1B161F', 'second-bg-color': '#1B2533;', 'first-font-color': 'white','second-font-color': '#21cd92'};


//var fooddata=getdata("food");
//var cusdata=getdata("custumers");
function getdata(table)
{
	 var dataf;
     var myVar=table;
	 $.ajax({          
          async:false,
          url: 'FoodChartDataServlet',
          type: 'POST',
          data: 'para=' + myVar,
          dataType: 'json',
                        
          success: function(datas){
              dataf=datas;
             // alert(dataf);                        	
              },
        error: function(data) {
	           alert(JSON.stringify(data));
            }
          });
return dataf;
}



var food=foodorderData.filter(function(entry){return entry.rate>0});













/*
var balance = 2000;

console.log("Enterred!!"+balance);

var foodorderData = [                 
	   {'date': new Date('01/02/2020'),'area':'pollachi','foodname' : 'Biriyani','custumername':'ravi','rate':120,'count':140},
	   {'date': new Date('01/09/2020'),'area':'abc colony','foodname' : 'dosa','custumername':'ram','rate':25,'count':40},
	   {'date': new Date('01/09/2020'),'area':'abc colony','foodname' : 'indly','custumername':'ramesh','rate':20,'count':30},
	   {'date': new Date('01/06/2020'),'area':'sundrapuram','foodname' : 'burger','custumername':'ram','rate':45,'count':50},
	   {'date': new Date('01/10/2020'),'area':'pollachi','foodname' : 'puff','custumername':'raesh','rate':15,'count':70},
	   {'date': new Date('01/01/2020'),'area':'senjeri','foodname' : 'chappathi','custumername':'rahul','rate':30,'count':80},
	   {'date': new Date('01/09/2020'),'area':'ml puram','foodname' : 'rice','custumername':'satheesh','rate':50,'count':100},
	   {'date': new Date('01/10/2020'),'area':'negamam','foodname' : 'chinees','custumername':'pradeesh','rate':60,'count':75},
	   {'date': new Date('01/01/2020'),'area':'sundrapuram','foodname' : 'friedrice','custumername':'satheesh','rate':45,'count':90},
	   {'date': new Date('01/10/2020'),'area':'pollachi','foodname' : 'noodles','custumername':'ram','rate':30,'count':80},
	   {'date': new Date('01/04/2020'),'area':'senjeri','foodname' : 'cholapoori','custumername':'ravi','rate':35,'count':65},
];                                     

console.log(JSON.stringify(foodorderData));
var bgC = {'red': "rgba(255, 99, 132, 0.7)", 'orange': "rgba(255, 159, 64, 0.7)", 'yellow': "rgba(255, 205, 86, 0.7)", 'green': "rgba(75, 192, 192, 0.7)", 'blue': "rgba(54, 162, 235,0.7)", 'violett': "rgba(153, 102, 255, 0.7)", 'grey': "rgba(201, 203, 207, 0.7)"};
var backgroundColorCategory = [bgC.red, bgC.orange, bgC.yellow, bgC.green, bgC.blue, bgC.violett, bgC.grey,bgC.red, bgC.orange, bgC.yellow, bgC.green,bgC.red];
var cssColors =     {'first-bg-color':  '#1B161F', 'second-bg-color': '#1B2533;', 'first-font-color': 'white','second-font-color': '#21cd92'};


//var fooddata=getdata("food");
//var cusdata=getdata("custumers");
function getdata(table)
{
	 var dataf;
     var myVar=table;
	 $.ajax({          
          async:false,
          url: 'JsonServlets',
          type: 'POST',
          data: 'para=' + myVar,
          dataType: 'json',
                        
          success: function(datas){
              dataf=datas;
             // alert(dataf);                        	
              },
        error: function(data) {
	           alert(JSON.stringify(data));
            }
          });
return dataf;
}



var food=foodorderData.filter(function(entry){return entry.rate>0});*/