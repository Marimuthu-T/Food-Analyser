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

public class CustomerChartsUtility{
	public String getCustomerOrderList() throws Exception {

        DatabaseReader databasereader=new DatabaseReader();
		try
		{
            ResultSet CustumerFoodCountListFromDatabase=databasereader.queryExecuter("select custumer_name,foodordercount from foodeat.custumers", "foodeat","customer");          
	        ArrayList<Customer> arrayOfCustumerObject=new ArrayList<Customer>();	            
    
	       

		    while(CustumerFoodCountListFromDatabase.next())
		    {
		    	    String custumername=CustumerFoodCountListFromDatabase.getString("custumer_name");
		    	    int foodcount=CustumerFoodCountListFromDatabase.getInt("foodordercount");
		    	    
		    	    
		    	    Customer customerObj=new Customer();
		    	    customerObj.setCustumerName(custumername);
		    	    customerObj.setFoodOrderCount(foodcount);
		    	    arrayOfCustumerObject.add(customerObj);
		    	
		    }		    
		    Gson gson=new Gson();

	        String json=gson.toJson(arrayOfCustumerObject);    
	          
	        return json;

		}
		finally
		{

		    //connection closer;
			databasereader.closeconnection();
		}
	}	
	public String getCustomerDetailsByLocation() throws Exception{

        DatabaseReader databasereader=new DatabaseReader();
		try
		{

            ResultSet result=databasereader.queryExecuter("select city,sum(foodordercount) as ordercount from custumers group by city;", "foodeat","custumer");    

	        ArrayList<Location> searchResultarray=new ArrayList<Location>();	            
    
		    while(result.next())
		    {
		    	    String Locationname=result.getString("city");
		    	    int LocationWisecount=result.getInt("ordercount");
		    	    Location LocationDetails=new Location();
		    	    LocationDetails.setLocationName(Locationname);
		    	    LocationDetails.setFoodSoldCount(LocationWisecount);  
		    		searchResultarray.add(LocationDetails);
		    	
		    }
		    //connection closer;

            Gson gson=new Gson();

           String json=gson.toJson(searchResultarray);    
          
           return json;

		}
		finally
		{
			databasereader.closeconnection();
		}
	}
	public JSONArray CustumerByRevenue() {
		return null;
	}

}


