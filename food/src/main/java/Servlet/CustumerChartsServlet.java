package Servlet;

import com.google.gson.Gson;

import Utility.CustomerChartsUtility;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;


@WebServlet(name = "CustumerChartsdataServlet", urlPatterns = {"/CustumerChartsdataServlet"})
public class CustumerChartsServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	PrintWriter printWriter;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	printWriter = response.getWriter();
        response.setContentType("JSONArray");
        
        try {

  		    String Chartype= request.getParameter("Chartype");
  		    
  		    CustomerChartsUtility customerChartData=new CustomerChartsUtility();
  		    
  		    String chartData=null;
  		    
  		    switch(Chartype)
  		    {
  		        case "custumerbyfoodcount":
  		        	chartData=customerChartData.getCustomerOrderList();
  		        	break;
  		        case "custumerbylocation":
  		        	chartData=customerChartData.getCustomerDetailsByLocation();
  		        	break;
  		        default:  		        		
  		    }
  		    System.out.print(chartData);
  		    printWriter.print(chartData);
        } 
 catch (Exception e) 
        {
	         printWriter.println(e);
        }
    }

}


//out.print("[{ 'foodname' : 'Biriyani','custumername':'ravi','rate':120,'count':140},{ 'foodname' : 'dosa','custumername':'ram','rate':25,'count':40},{ 'foodname' : 'indly','custumername':'ramesh','rate':20,'count':30}, { 'foodname' : 'burger','custumername':'ram','rate':45,'count':50},{'foodname' : 'puff','custumername':'raesh','rate':15,'count':70},{ 'foodname' : 'chappathi','custumername':'rahul','rate':30,'count':80},{ 'foodname' : 'rice','custumername':'satheesh','rate':50,'count':100},{ 'foodname' : 'chinees','custumername':'pradeesh','rate':60,'count':75},{ 'foodname' : 'friedrice','custumername':'satheesh','rate':45,'count':90},{ 'foodname' : 'noodles','custumername':'ram','rate':30,'count':80},{ 'foodname' : 'cholapoori','custumername':'ravi','rate':35,'count':65}]");