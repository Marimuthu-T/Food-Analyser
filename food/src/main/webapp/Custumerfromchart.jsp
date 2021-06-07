
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <link rel="stylesheet" href="CSS/FoodDetailsStyle.css">
    
    
     <script type="text/javascript">
     //getting food name from url
    var url_string = window.location.href 
    var url = new URL (url_string)

    var customername = url.searchParams.get("customername");
    var count = url.searchParams.get("count");
            
	 window.onload = function(){

         document.getElementById("head").innerHTML =""+customername;
         document.getElementById("tittle").innerHTML =customername;
         document.getElementById("customername").innerHTML = "The Custumer name is "+customername;
      	document.getElementById("customerid").innerHTML = "The Custumer food count is "+count;
     } 
     
    </script>
    <title id="head">Food Details</title>
</head>

<body>

        <div class="main">
            <div class="header">
            <div class="dashboard">
                <span class="welcome_message">Welcome to<span class="welcome_message_name"></span></span>
                <div class="dashboard-header">
                    <p>Custumer Details</p>
                   </div>
                    
                    <h1 id ="tittle" style="font-size:125px;,margin:auto;"></h1>
                    
          
                 <div class="header-elements">
                        <img class="profile" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"alt="profile image of logged in user" ></div>
           
                     </div>
           </div>
                <div class="food-details" >
                
                             
                             <h1 id="customername"></h1>
                             <h1 id="customerid"></h1>
                </div>

           
        </div>
                 
</body>
   
</html>



<!-- 
https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg -->


