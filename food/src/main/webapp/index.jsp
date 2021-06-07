<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Statistics</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.css">
    <script src="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.js"></script>
    <link rel="stylesheet" href="CSS/Home-style.css">
</head>

<body>
        <div class="main">
            <div class="header">
             <div class=welcome-header style="justify-content: flex-end;">                       
                    <span class="welcome_message">Welcome to</span>
                     <h1 >Foody Statistics</h1>
                 </div>
                 <h1 id="catagoryselectinstructor">Select your catagory</h1>
                <div class="header-elements">                       
             <ul class="list-group" id="Search-result" style="text-align: right; margin-right:60px; margin-top:20px;"></ul>
                       <div align="center">                         
                           <input type="text" name="datapicker" id="search-box" placeholder="Search for Food" class="form-control" />
                       </div>
                    <i class="header-element material-icons">search</i>
                    
                    <img class="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/1920px-ZOHO.svg.png" alt="profile image of logged in user">
                  </div>             
            </div>
             
            <div class="dashboard">
                
                <div class="dashboard-header">             

                    <div class="select-wrapper">
                        <select name="datapicker" id="datapicker">
                            <option value="index.jsp">Home</option>
                            <option value="HTML-GraphStatistics/foodStatistics.html">Food</option>
                            <option value="HTML-GraphStatistics/custumerStatistics.html">Customer</option>
                        </select>
                    </div>
                </div>
                                 <!--  div to load statistic data --> 
               <div class="dashboard-cards" id="Statistics_Loader">
                 <div id="homemsg" style="align:center;"></div>                  
                </div>
                </div>
                </div>
</body>
     
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function(){
        	  
        	   $('#datapicker').change( function() {
        		      var  urlload=$(this).val();
        		      if(urlload !=="index.jsp")
        		    	  {
        		    	  document.getElementById("catagoryselectinstructor").innerHTML ="";
                  		  $("#Statistics_Loader").load(urlload); 
        		    	  }
        		      else{
        		      window.location =urlload;
        		      }
        		   });        	   
        	   
        	  
        	   $('#search-box').keyup(function(){
        			  $('#Search-result').html('');
        			  $('#state').val('');
        			  var searchField = $('#search-box').val();
        			  if(searchField !=="")
        			  {
        		           $.ajax({          
        		              async:false,
        		              url: 'FoodSearchServlet',   /* search query servlet */
        		              type: 'POST',
        		              data: 'SearchData='+searchField+'&searchType=byfoodname',
        		              dataType: 'json',
        		                             
        		              success: function(SearchResult){
        		                //	 alert(JSON.stringify(SearchResult));                       /* load all the data for the search result */
        		                  for(SearchResultiteratorforJSONArray=0;SearchResultiteratorforJSONArray<SearchResult.length;SearchResultiteratorforJSONArray++)
        		                  {
                                       var SearchResultiterator=JSON.parse(SearchResult[SearchResultiteratorforJSONArray]); 
                                        if(SearchResultiteratorforJSONArray===0)
				                           {        			    	
				                              $('#Search-result').append('<li class="list-group-item link-class">Search Result</li>');

				                           }
     			                        $('#Search-result').append('<a href="foodDetails.jsp?foodname='+SearchResultiterator.foodName+'"><li class="list-group-item link-class">'+SearchResultiterator.foodName+'</a>');
                                	
        		                  }
        		             },
        			        error: function(SearchResult)
                        	 {
                        	  alert("Error Loading Search Result;"+JSON.stringify(SearchResult));
                        	  
                        	 }
        			     });
        			  }
        			 
                });
        	   
        }); 

       
    </script>
</html>




























<!-- %@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Statistics</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.css">
    <script src="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.js"></script>
    <link rel="stylesheet" href="CSS/Home-style.css">
</head>

<body>
        <div class="main">
            <div class="header">
                <div class="header-elements">
                       
             <ul class="list-group" id="Search-result" style="text-align: right; margin-right:60px; margin-top:20px;"></ul>
                       <div align="center">                         
                           <input type="text" name="datapicker" id="search-box" placeholder="Search for Food" class="form-control" />
                       </div>
                    <i class="header-element material-icons">search</i>
                    
                    <img class="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/1920px-ZOHO.svg.png" alt="profile image of logged in user">
                  </div>
                  
            </div>
            
             
            <div class="dashboard">
                <span class="welcome_message">Welcome to<span class="welcome_message_name"></span></span>
                
                <div class="dashboard-header">
                
                    <p>Foody Statistics</p>
       
                    <div class="select-wrapper">
                        <select name="datapicker" id="datapicker">
                            <option value="index.jsp">Home</option>
                            <option value="HTML-GraphStatistics/foodStatistics.html">Food</option>
                            <option value="HTML-GraphStatistics/custumerStatistics.html">Custumer</option>
                        </select>
                    </div>
                </div>
               <div class="dashboard-cards" id="Statistics_Loader">
                   
                    <div id="homemsg" >
                           <h1>Select your catagory</h1>
                    </div>
                  
                </div>
                </div>
                </div>
</body>
     
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function(){
        	  
        	   $('#datapicker').change( function() {
        		      var  urlload=$(this).val();
        		      if(urlload !=="index.jsp")
        		    	  {

                  		  $("#Statistics_Loader").load(urlload); 
        		    	  }
        		      else{
        		      window.location =urlload;
        		      }
        		   });
        	   
        	   
        	  
        	   $('#search-box').keyup(function(){
        			  $('#Search-result').html('');
        			  $('#state').val('');
        			  var searchField = $('#search-box').val();
        			  if(searchField !=="")
        			  {
        		           $.ajax({          
        		              async:false,
        		              url: 'SearchinFoodServlet',   /* search query servlet */
        		              type: 'POST',
        		              data: 'SearchData='+searchField+"&searchType=byfoodname",
        		              dataType: 'json',
        		                             
        		              success: function(SearchResult){
        		                //	 alert(JSON.stringify(SearchResult));                       /* load all the data for the search result */
        		                  for(SearchResultiteratorforJSONArray=0;SearchResultiteratorforJSONArray<SearchResult.length;SearchResultiteratorforJSONArray++)
        		                  {
                                       var SearchResultiterator=JSON.parse(SearchResult[SearchResultiteratorforJSONArray]); 
                                        if(SearchResultiteratorforJSONArray===0)
				                           {        			    	
				                              $('#Search-result').append('<li class="list-group-item link-class">Search Result</li>');

				                           }
     			                        $('#Search-result').append('<a href="foodDetails.jsp?foodname='+SearchResultiterator.foodname+'"><li class="list-group-item link-class">'+SearchResultiterator.foodname+'</a>');
                                	
        		                  }
        		             },
        			        error: function(SearchResult)
                        	 {
                        	  alert("Error Loading Search Result;");
                        	  
                        	 }
        			     });
        			  }
        			 
                });
        	   
        }); 

       
    </script>
</html> -->