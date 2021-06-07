package Servlet;


import Utility.FoodChartsUtility;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;


@WebServlet(name = "FoodChartDataServlet", urlPatterns = {"/FoodChartDataServlet"})
public class FoodChartServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	PrintWriter printWriter;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	printWriter = response.getWriter();
        response.setContentType("JSONArray");  
        try {

  		    String Chartype= request.getParameter("Chartype");
  		    
  		    FoodChartsUtility foodChartData=new FoodChartsUtility();
  		    
  		    String chartData=null;
  		    
  		    switch(Chartype)
  		    {
  		        case "foodGroupedBycount":
  		        	chartData=foodChartData.getFoodOrderList();
  		        	break;
  		        case "foodbyrate":
  		        	chartData=foodChartData.getFoodRateList();
  		            break;
  		        case "foodbyLocation":
  		        	chartData=foodChartData.getLocationSalesCountList();
  		        	break;
  		        case "FoodbyRevenue":
  		        	chartData=foodChartData.getLocationSalesRevenueList();
  		        	break;
  		        default:
  		        	chartData=null;
  		        		
  		    }
  		  printWriter.print(chartData);
        } 
        catch (Exception e) 
        {
        	printWriter.println("!!!");
        }
    }

}