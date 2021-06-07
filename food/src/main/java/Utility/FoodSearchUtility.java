package Utility;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.simple.JSONArray;

import com.google.gson.Gson;

import DatabaseReader.DatabaseReader;
import POJO.Customer;
import POJO.Food;

public class FoodSearchUtility {

	public JSONArray getSearchResultByFoodName (String foodNameToSearch)  throws Exception 
	{		
        try { 
            DatabaseReader databasereader=new DatabaseReader();
            
            ResultSet matchedFoodNames=databasereader.queryExecuter("select food_name from foodeat.food where food_name REGEXP '"+foodNameToSearch+"?'", "foodeat","food");          
	       
            ArrayList<Food> foodObjectArray=new ArrayList<Food>();
	            
    
		    while(matchedFoodNames.next())
		    {
		    	    String foodName=matchedFoodNames.getString("food_name");

		    		Food foodObj=new Food();
		    		foodObj.setFoodName(foodName);
		    		foodObjectArray.add(foodObj);
		    	
		    }
		    //connection closer;
		   databasereader.closeconnection();
		   
		   
		   JSONArray SearchResultforfoodname=new JSONArray();
		   
		   
           for(int i=0;i<foodObjectArray.size();i++)
           {
               Gson gson=new Gson();
               String foodObjJSONString=gson.toJson(foodObjectArray.get(i));    
               SearchResultforfoodname.add(foodObjJSONString);
           } 
           System.out.print(SearchResultforfoodname);
           return SearchResultforfoodname;

         }
		catch (Exception e)
		{
			System.out.print("Error occured:"+e);
			return null;
		}
		
	}
	public JSONArray getSearchResultByFoodId(int foodId)
	{
		  try { 
	            DatabaseReader databasereader=new DatabaseReader();
	            
	            ResultSet matchedFoodNames=databasereader.queryExecuter("select food_name from foodeat.food where foodid="+foodId+";", "foodeat","food");          
		       
	            ArrayList<Food> foodObjectArray=new ArrayList<Food>();
		            
	    
			    while(matchedFoodNames.next())
			    {
			    	    String foodName=matchedFoodNames.getString("food_name");

			    		Food foodObj=new Food();
			    		foodObj.setFoodName(foodName);
			    		foodObjectArray.add(foodObj);
			    	
			    }
			    //connection closer;
			   databasereader.closeconnection();
			   
			   
			   JSONArray SearchResultforfoodname=new JSONArray();
			   
			   
	           for(int i=0;i<foodObjectArray.size();i++)
	           {
	               Gson gson=new Gson();
	               String foodObjJSONString=gson.toJson(foodObjectArray.get(i));    
	               SearchResultforfoodname.add(foodObjJSONString);
	           } 
	           System.out.print(SearchResultforfoodname);
	           return SearchResultforfoodname;

	         }
			catch (Exception e)
			{
				System.out.print("Error occured:"+e);

				return null;
			}
		
     }

}







