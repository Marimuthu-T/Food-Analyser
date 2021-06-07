 
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Details</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.css">
    <script src="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.js"></script>
    <link rel="stylesheet" href="CSS/FoodDetailsStyle.css">
    <link rel="stylesheet" href="CSS/Home-style.css">   		     
     <script type="text/javascript">
     //getting food name from url
    var url_string = window.location.href 
    var url = new URL (url_string)

    var foodName = url.searchParams.get("foodname");
	
        
        $.ajax({          
            async:false,
            url: 'FoodDetailsfromdatabaseServlet',
            type: 'POST',
            data: 'chartType=foodDetail&searchFoodName=' +foodName,
            dataType: 'json',
                         
            success: function(data){
               
                   var p=JSON.parse(data[0]);
                   window.onload = function()
                   {                                
                        document.getElementById("tittle").innerHTML =""+p.foodName;
                        document.getElementById("foodname").innerHTML = "The food name is "+p.foodName;
                       	document.getElementById("foodid").innerHTML = "The food Id is "+p.foodId;
                       	document.getElementById("foodrate").innerHTML = "The food rate is "+p.rate;
                    } 
                     	
                },
          error: function(data) {
  	          alert("Error Loading fooddetails!");
              }
            });
            
       
    </script>
    
</head>

<body>

        <div class="main">
            <div class="header">
            <div class="dashboard">
                <span class="welcome_message">Welcome to<span class="welcome_message_name"></span></span>
                <div class="dashboard-header">
                    <p>Food Details</p>
                   </div>
                    
                    <h1 id ="tittle" style="font-size:125px;,margin:auto;"></h1>
                    
          
                 <div class="header-elements">
                        <img class="profile-img" src="http://www.richtaste.org/wp-content/uploads/2018/09/Mushroom-Biryani.jpg"alt="profile image of logged in user" width ="500"  height="500"></div>
           
                     </div>
           </div>
                <div class="food-details" >
                
                             <h1 id="foodid"></h1>
                             <h1 id="foodname"></h1>
                             <h1 id="foodrate"></h1>
                </div>
                       <div class="card"  id="card-1">
        		                     
        		                         <div class="chart-canvas">
        		                             <canvas id="FoodbasedOnRate"></canvas>
        		                         </div>

        		                     </div> 
        		                       
        		                    <div class="card"  id="card-2">
        		                     
        		                         <div class="chart-canvas">
        		                             <canvas id="areawisecount"></canvas>
        		                         </div>

        		                     </div>   
             

           
        </div>
                 
</body>   

</html>