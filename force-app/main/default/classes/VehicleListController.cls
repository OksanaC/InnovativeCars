public class VehicleListController {
    public String vehicleId{get;set;}
    public Vehicle__c actObj{get;set;}
    public VehicleListController () {
        actObj = new Vehicle__c();
    }
    @AuraEnabled(cacheable=true scope='global')
   public static List<Account> getAccount() {
       return [SELECT Id, Name FROM Account];
   }
   @AuraEnabled(cacheable=true scope='global' )
   public static List<Showroom__c> getShowroom(String accountId){
       return [SELECT Id,Name FROM Showroom__c 
       WHERE  Account__c = :accountId];
        
   }  
   @AuraEnabled(cacheable=true scope='global' )
   public static List<Vehicle__c> getVehicle(String vehicleId){
       return [SELECT Id, Name FROM Vehicle__c 
       WHERE  Showroom__c = :vehicleId];
        
   }
 // @AuraEnabled(cacheable=true scope='global' )
 //  public static List<Vehicle__c> getVehicleRows(String vehicleId){
    //   return [SELECT Id, Name, Brand__c, Model__c, Price__c, Condition__c, Interested__c FROM Vehicle__c 
    //   WHERE  Id= :vehicleId];
 //  }
}

