
function getdata(charttopic,foodname)
{
	 var dataf;
	 $.ajax({          
          async:false,
          url: 'FoodDetailsfromdatabaseServlet',
          type: 'POST',
          data: 'Chartype='+ charttopic+"&searchfoodname="+foodname,
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
console.log(foodName);
var byarearfoodcount=getdata("areawisefoodcount",foodName);