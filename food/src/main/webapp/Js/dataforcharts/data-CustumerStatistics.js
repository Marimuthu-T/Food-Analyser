var balance = 2000;

console.log("data--utility");

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
var bgColor={'a':"#00876c",'b':"#3d9c73",'c':"#63b179",'d':"#88c580",'e':"#aed987",'f':"#d6ec91",'g':"#ffff9d",'h':"#fee17e",'i':"#fcc267",'j':"#f7a258",'k':"#ef8250",'l':"#e4604e",'m':"#d43d51"};
var backGroundColor=[bgColor.a,bgColor.b,bgColor.c,bgColor.d,bgColor.e,bgColor.f,bgColor.g,bgColor.h,bgColor.i,bgColor.j,bgColor.k,bgColor.l,bgColor.m];
var bgC = {'red': "rgba(255, 99, 132, 0.7)", 'orange': "rgba(255, 159, 64, 0.7)", 'yellow': "rgba(255, 205, 86, 0.7)", 'green': "rgba(75, 192, 192, 0.7)", 'blue': "rgba(54, 162, 235,0.7)", 'violett': "rgba(153, 102, 255, 0.7)", 'grey': "rgba(201, 203, 207, 0.7)"};
var backgroundColorCategory = ["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#3366cc","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#2a778d","#668d1c","#bea413","#0c5922","#743411"];
var cssColors =     {'first-bg-color':  '#1B161F', 'second-bg-color': '#1B2533;', 'first-font-color': 'white','second-font-color': '#21cd92'};

function getdata(charttype)
{
	 var dataf;
	 $.ajax({          
          async:false,
          url: 'CustumerChartsdataServlet',
          type: 'POST',
          data: 'Chartype=' + charttype,
          dataType: 'json',
                        
          success: function(data){
              dataf=data;
              //alert(JSON.stringify(data));                        	
              },
        error: function(data) {
	//alert("Error Loading customer Chart data");
            }
          });
return dataf;
}


var custumerbylocationdata=getdata("custumerbylocation");


var customer=custumerbylocationdata.filter(function(entry){return true});



var food=foodorderData.filter(function(entry){return entry.rate>0});



var custumerbyfoodcountdata=getdata("custumerbyfoodcount");



//var custumerbyRevenuedata=getdataforCustomer("custumerbyRevenue");


//var Locationawisecustumerfoodcountdata=getdataforCustomer("Locationawisecustumerfoodcount");





























/*var balance = 2000;

console.log("datautility");

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

var bgC = {'red': "rgba(255, 99, 132, 0.7)", 'orange': "rgba(255, 159, 64, 0.7)", 'yellow': "rgba(255, 205, 86, 0.7)", 'green': "rgba(75, 192, 192, 0.7)", 'blue': "rgba(54, 162, 235,0.7)", 'violett': "rgba(153, 102, 255, 0.7)", 'grey': "rgba(201, 203, 207, 0.7)"};
var backgroundColorCategory = [bgC.red, bgC.orange, bgC.yellow, bgC.green, bgC.blue, bgC.violett, bgC.grey,bgC.red, bgC.orange, bgC.yellow, bgC.green,bgC.red];
var cssColors =     {'first-bg-color':  '#1B161F', 'second-bg-color': '#1B2533;', 'first-font-color': 'white','second-font-color': '#21cd92'};

function getdata(table)
{
	 var dataf;
     var myVar=table;
	 $.ajax({          
          async:false,
          url: 'CustumerChartsdataServlet',
          type: 'POST',
          data: 'Chartype=' + myVar,
          dataType: 'json',
                        
          success: function(data){
              dataf=data;
              //alert(JSON.stringify(data));                        	
              },
        error: function(data) {
	          // alert(JSON.stringify(data));
            }
          });
return dataf;
}


var custumerbylocationdata=getdata("custumerbylocation");


var customer=custumerbylocationdata.filter(function(entry){return true});



var food=foodorderData.filter(function(entry){return entry.rate>0});



var custumerbyfoodcountdata=getdata("custumerbyfoodcount");



//var custumerbyRevenuedata=getdataforCustomer("custumerbyRevenue");


//var Locationawisecustumerfoodcountdata=getdataforCustomer("Locationawisecustumerfoodcount");



*/