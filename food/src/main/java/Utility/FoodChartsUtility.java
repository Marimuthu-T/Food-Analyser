package Utility;

import POJO.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.json.simple.JSONArray;

import com.google.gson.Gson;

import DatabaseReader.DatabaseReader;

public class FoodChartsUtility{
	public String getFoodOrderList() throws Exception {
		try
		{

            DatabaseReader databasereader=new DatabaseReader();
            ResultSet foodCountDetailsFromDatabase=databasereader.queryExecuter("select food_name,foodRate from foodeat.food", "foodeat","food");          
	        ArrayList<Food> searchResultarray=new ArrayList<Food>();	            
    
		    while(foodCountDetailsFromDatabase.next())
		    {
		    	    String foodname=foodCountDetailsFromDatabase.getString("food_name");
		    	    int foodcount=foodCountDetailsFromDatabase.getInt("food_count");

		    		Food foodObj=new Food();
		    		foodObj.setFoodName(foodname);
		    		foodObj.setCount(foodcount);
		    		searchResultarray.add(foodObj);
		    	
		    }
		    //connection closer;
		    databasereader.closeconnection();

           Gson gson=new Gson();   
           String foodDetailJSONString=gson.toJson(searchResultarray);
           
           return foodDetailJSONString;
		}
		catch(Exception e )
		{
		return null;
		}
	}
	public String getFoodRateList() throws Exception{
		try
		{

            DatabaseReader databasereader=new DatabaseReader();
            ResultSet foodRateDetailsFromDatabase=databasereader.queryExecuter("select food_name,foodcount from foodeat.food", "foodeat","food");          
	        ArrayList<Food> searchResultarray=new ArrayList<Food>();	            
    
		    while(foodRateDetailsFromDatabase.next())
		    {
		    	    String foodname=foodRateDetailsFromDatabase.getString("food_name");
		    	    int foodRate=foodRateDetailsFromDatabase.getInt("foodRate");

		    		Food foodObj=new Food();
		    		foodObj.setFoodName(foodname);
		    		foodObj.setRate(foodRate);
		    		searchResultarray.add(foodObj);
		    	
		    }
		    //connection closer;
		    databasereader.closeconnection();
		    

           Gson gson=new Gson();   
           String foodRateDetailJSONString=gson.toJson(searchResultarray);
           return foodRateDetailJSONString;

		}
		catch(Exception e)
		{
		return null;
		}
	}
	public String getLocationSalesCountList() throws Exception{
		try
		{

            DatabaseReader databasereader=new DatabaseReader();
            ResultSet resultfoodname=databasereader.queryExecuter("select food_name from foodeat.food", "foodeat","order");    

	        ArrayList<Food> searchResultarray=new ArrayList<Food>();	            
    
		    while(resultfoodname.next())
		    {
		    	    String foodname=resultfoodname.getString("food_name");

		            DatabaseReader areawisefoodcount=new DatabaseReader();
		            ResultSet resultforfoodcount=areawisefoodcount.queryExecuter("select count(*) from orders where orders.foodname='"+foodname+"';", "foodeat","food");
		            int foodcount=0;
		            if(resultforfoodcount.next())
		     		{
			    	    foodcount=resultforfoodcount.getInt(1);
		     	    }

		    		Food foodpojo=new Food();
		    		foodpojo.setFoodName(foodname);
		    		foodpojo.setCount(foodcount);
		    		searchResultarray.add(foodpojo);
		    	
		    }
		    //connection closer;
		   databasereader.closeconnection();

           Gson gson=new Gson();   
           String LocationSalesJSONString=gson.toJson(searchResultarray); 
           return LocationSalesJSONString;

		}
		catch (Exception e)
		{
			return null;
		}
	}
	public String getLocationSalesRevenueList() {
		return null;
	}

}


