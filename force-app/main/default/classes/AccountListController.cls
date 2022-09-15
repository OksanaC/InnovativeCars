public with sharing class AccountListController {
    @auraEnabled(cacheable=true)
    public static List<Account> fetchAccount()
    {
        List<Account> accList=[SELECT Id,Name FROM Account ];
        return accList;
    }
    @auraEnabled
    public static List<Showroom__c> getShowrooms(String accountId)
    {
        List<Showroom__c> showList=[SELECT Id, Name, Account__c FROM Showroom__c WHERE Account__c=:accountId ];
        return showList;
    }
    @auraEnabled
    public static List<Vehicle__c> getVehicle(String showroomId)
    {
        List<Vehicle__c> vehList=[SELECT Id, Name, Showroom__c FROM Vehicle__c WHERE Showroom__c=: showroomId];
       return vehList;
   }  
}
