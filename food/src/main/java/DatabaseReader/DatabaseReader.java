package DatabaseReader;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class DatabaseReader {
	@SuppressWarnings("finally")

	Connection connection=null;
	public void closeconnection() throws SQLException
	{
		connection.close();
	}
	public ResultSet queryExecuter(String query,String database,String table) throws SQLException
	{
		ResultSet data=null;
        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");  
            connection  = DriverManager.getConnection("jdbc:mysql://localhost:3306/foodeat","root","root");  
            
    		 Statement statement = connection.createStatement(); 
			 data = statement.executeQuery(query);

		       //connection.close();
			   
			   
			 return data;
			
		} catch (SQLException | ClassNotFoundException e) {
			System.out.print(e);
			e.printStackTrace();
		}
        finally
        {
        	//connection.close();
        }
        return null;
	}

}
