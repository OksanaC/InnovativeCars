import { LightningElement , api, wire, track} from 'lwc';

import getVehicleRows from '@salesforce/apex/VehicleGetListgit remote add origin https://github.com/OksanaC/newInnovativeCars.git.getVehicleRows';
import { } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Vehicle__c.Name';
import BRAND_FIELD from '@salesforce/schema/Vehicle__c.Brand__c';
import CONDITION_FIELD from '@salesforce/schema/Vehicle__c.Condition__c';
import PRICE_FIELD from '@salesforce/schema/Vehicle__c.Price__c';
import INTERESTED_FIELD from '@salesforce/schema/Vehicle__c.Interested__c';

export default class VehicleRecordList extends LightningElement {

@api vehicleidfrmparent;
@api vehicleId;
@track vehicles;
@wire(getVehicleRows,{vehicleId: '$vehicleId'}) vehicles;
fields = [NAME_FIELD, BRAND_FIELD,PRICE_FIELD, CONDITION_FIELD, INTERESTED_FIELD];

handleSubmit(event) {
    event.preventDefault(); 
    const fields = {};
            fields[ID_FIELD.fieldApiName] = this.vehickeId;
            fields[Name_FIELD.fieldApiName] = this.template.querySelector("[data-field='Vehicle Name']").value;
            fields[Brand_FIELD.fieldApiName] = this.template.querySelector("[data-field='Brand']").value;
            fields[Price_FIELD.fieldApiName] = this.template.querySelector("[data-field='Price']").value;
            fields[Condition_FIELD.fieldApiName] = this.template.querySelector("[data-field='Condition']").value;
            fields[Interested_FIELD.fieldApiName] = this.template.querySelector("[data-field='Interested']").value;

            fields.INTERESTED_FIELD = ' ';
            this.template.querySelector('lightning-record-form').submit(fields);
    
        //console.log("getSelectedRows => ", this.template.querySelector('lightning-record-form').getVehicleRows());
}
}
