package POJO;


public class Customer {
	
    private int custumerId=0;
    private String custumerName=null;
    private int foodOrderCount=0;
    private String location=null;
    
    
	public int getCustumerId() {
		return custumerId;
	}
	public void setCustumerId(int custumerId) {
		this.custumerId = custumerId;
	}
	public String getCustumerName() {
		return custumerName;
	}
	public void setCustumerName(String custumerName) {
		this.custumerName = custumerName;
	}
	public int getFoodOrderCount() {
		return foodOrderCount;
	}
	public void setFoodOrderCount(int totalFoodOrderCount) {
		this.foodOrderCount = totalFoodOrderCount;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
    
   }