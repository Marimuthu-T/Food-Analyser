package Servlet;

import Utility.FoodSearchUtility;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;



@WebServlet("/FoodSearchServlet")
public class FoodSearchServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	PrintWriter out;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        out = response.getWriter();
        response.setContentType("JSONArray");  
        try {

        	   String SearchFieldData= request.getParameter("SearchData");
     		    String SearchType=request.getParameter("searchType");
     		   System.out.println("!!!");
     		    FoodSearchUtility  searchinfood=new FoodSearchUtility();
     		    JSONArray result=new JSONArray();
     		    switch(SearchType)
     		    {
     		        case "byfoodname":
     		        	result=searchinfood.getSearchResultByFoodName(SearchFieldData);
     		        	break;
     		        case "byfoodid":
     		        	//need to be added
     		            break;
     		        case "bycount":
     		        	//need to be added
     		        	break;
     		    }
     		    
     		  out.print(result);

        } catch (Exception e) {
            System.out.println("!!!");
        }
    }

}