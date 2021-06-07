package POJO;

public class Location{
	private String locationName=null;	
	private int customerCount=0;
	private int foodSoldCount=0;
	private int revenue=0;
	
	
	public String getLocationName() 
	{
		return locationName;
	}
	public void setLocationName(String locationName) 
	{
		this.locationName = locationName;
	}
	public int getCustomerCount() {
		return customerCount;
	}
	public void setCustomerCount(int custumerCount) 
	{
		this.customerCount = custumerCount;
	}
	public int getFoodSoldCount() 
	{
		return foodSoldCount;
	}
	public void setFoodSoldCount(int foodSoldCount) 
	{
		this.foodSoldCount = foodSoldCount;
	}
	public int getRevenue()
	{
		return revenue;
	}
	public void setRevenue(int revenue) 
	{
		this.revenue = revenue;
	}
	
	
}
