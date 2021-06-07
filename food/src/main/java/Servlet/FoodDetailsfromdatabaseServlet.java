package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;


import Utility.FoodDetailsUtility;


@WebServlet("/FoodDetailsfromdatabaseServlet")
public class FoodDetailsfromdatabaseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		    PrintWriter out;
	        out = response.getWriter();
	        response.setContentType("JSONArray");  
	        try {

	  		    String SearchFoodname= request.getParameter("searchFoodName");
	  		   // System.out.println(SearchFoodname);
	  		    
	  		    String chartType= request.getParameter("chartType");
	  		    //System.out.println(chartType);
	  		    
	  		    
	  		    String chartData=null;
	  		    JSONArray fooddetail=new JSONArray();
	            FoodDetailsUtility searchfooddetails=new FoodDetailsUtility();
	            
	            switch(chartType)
	            { 
	                case "foodDetail":
	                    fooddetail=searchfooddetails.getFoodDetail(SearchFoodname);
	                    break;
	                case "areawisefoodcount":
	                	//chartData=searchfooddetails.foodbycustumerDetail(SearchFoodname);
	                	break;
	                default:
	                	System.out.print("Error Chart type not found");
	            	
	            }
	            
	            if(chartType.equals("foodDetail"))
	            	out.print(fooddetail);
	            else
	            	out.print(chartData);
	        }
	        catch (Exception e) {
	            out.println("!!!"+e);
	        }
	    }

}
