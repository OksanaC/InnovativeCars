public class VehicleListController {
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
   public static List<Vehicle__c> getVehicle(String showroomId){
       return [SELECT Id, Name, Brand__c, Model__c, Price__c FROM Vehicle__c 
       WHERE  Showroom__c = :showroomId];
        
   }  
}