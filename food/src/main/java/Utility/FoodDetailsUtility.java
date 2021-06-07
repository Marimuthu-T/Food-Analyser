package Utility;

import java.sql.ResultSet;
import java.util.ArrayList;

import org.json.simple.JSONArray;

import com.google.gson.Gson;

import DatabaseReader.DatabaseReader;
import POJO.Food;
import POJO.Location;

public class FoodDetailsUtility {
	
	public JSONArray getFoodDetail (String searchFoodName)  throws Exception 
	{		
        try { 
            DatabaseReader databasereader=new DatabaseReader();
            
            ResultSet FoodDetailFromDatabase=databasereader.queryExecuter("select foodid,food_name,rate from foodeat.food where food_name='"+searchFoodName+"';", "foodeat","food");          
	       
            ArrayList<Food> foodObjectArray=new ArrayList<Food>();
	        System.out.println("select foodid,food_name,rate from foodeat.food where food_name='"+searchFoodName+"';");    
		    while(FoodDetailFromDatabase.next())
		    {
		    	 System.out.println("1");
		    	    String foodName=FoodDetailFromDatabase.getString("food_name");
		    	    int foodId=FoodDetailFromDatabase.getInt("foodid");
		    	    int foodRate=FoodDetailFromDatabase.getInt("rate");
		    	    
		    		Food foodObj=new Food();
		    		foodObj.setFoodName(foodName);
		    		foodObj.setFoodId(foodId);
		    		foodObj.setRate(foodRate);
		    		foodObjectArray.add(foodObj);
		    	
		    }
		    //connection closer;
		   databasereader.closeconnection();
		   
		   //foodDetail of given food name
		   JSONArray foodDetail=new JSONArray();
		   
		   
           for(int i=0;i<foodObjectArray.size();i++)
           {
               Gson gson=new Gson();
               String foodObjJSONString=gson.toJson(foodObjectArray.get(i));    
               foodDetail.add(foodObjJSONString);
           } 
           System.out.print(foodDetail);
           return foodDetail;

         }
		catch (Exception e)
		{
			System.out.print("Error occured:"+e);
			return null;
		}
	}
        
        public JSONArray getFoodcountbylocation (int foodId)  throws Exception 
    	{		
            try { 
                DatabaseReader databasereader=new DatabaseReader();
                
                ResultSet LocationDataFromDatabase=databasereader.queryExecuter("select location,count(foodid) as foodOrderCount from orders  where foodid="+foodId+"group by location ;", "foodeat","food");          
    	       
                ArrayList<Location> locationObjectArray=new ArrayList<Location>();    
    		    while(LocationDataFromDatabase.next())
    		    {
    		    	 System.out.println("1");
    		    	    String locationName=LocationDataFromDatabase.getString("location");
    		    	    int foodorderCount=LocationDataFromDatabase.getInt("foodOrderCount");
    		    	    
    		    	    Location locationObj=new Location();
    		    	    locationObj.setLocationName(locationName);
    		    	    locationObj.setFoodSoldCount(foodorderCount);
    		    	    locationObjectArray.add(locationObj);
    		    	
    		    }
    		    //connection closer;
    		   databasereader.closeconnection();
    		   
    		   //foodDetail of given food name
    		   JSONArray LocationDetailforfood=new JSONArray();
    		   
    		   
               for(int i=0;i<locationObjectArray.size();i++)
               {
                   Gson gson=new Gson();
                   String foodObjJSONString=gson.toJson(locationObjectArray.get(i));    
                   LocationDetailforfood.add(foodObjJSONString);
               } 
               System.out.print(LocationDetailforfood);
               return LocationDetailforfood;

             }
    		catch (Exception e)
    		{
    			System.out.print("Error occured:"+e);
    			return null;
    		}

	}
}
