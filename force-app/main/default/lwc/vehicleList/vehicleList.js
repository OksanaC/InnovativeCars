import {
    LightningElement,
    wire,
    track
} from 'lwc';
import {
    getRelatedListRecordsBatch
} from 'lightning/uiRelatedListApi';

import getAccountList from '@salesforce/apex/VehicleListController.getAccount';
import getShowroom from '@salesforce/apex/VehicleListController.getShowroom';
import getVehicle from '@salesforce/apex/VehicleListController.getVehicle';
import { NavigationMixin } from 'lightning/navigation';

const columns = [{
    label: 'Vehicle Name',
   fieldName: 'Name',
},
{label: 'Brand',
fieldName: 'Brand__c',
}];

export default class AccountList extends LightningElement {
    @track accountId = '';
    @track showroomId;
    @track showrooms;
    @track vehicles;
    @track columns = columns;
    @track selectedVehicles;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccountList) accounts;
    @wire(getShowroom, {
        accountId: '$accountId'
    }) showrooms;
    @wire(getVehicle, {
        showroomId: '$showroomId'
    }) vehicles;

    onValueSelection(event) {
        console.log(this.showrooms)
        const selectedAccount = event.target.value;
        this.accountId = event.target.value;
    
    }

    onValueSelection2(event) {
        const selectedShowroom = event.target.value;
        this.showroomId = event.target.value;
     
    }
    onVehicleSelection(event) {
        console.log(event.detail.selectedRows)
        this.selectedVehicles = event.detail.selectedRows;
        this.showroomId = event.target.value;
    }
 

	}

