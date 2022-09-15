import { LightningElement, track, wire} from 'lwc';
import fetchAccount from '@salesforce/apex/AccountListController.fetchAccount';
import fetchShowrooms from '@salesforce/apex/AccountListController.getShowrooms';
import fetchVehicle from '@salesforce/apex/AccountListController.getVehicle';

export default class Display_Accounts_And_Related extends LightningElement {
@track acc;
@track show;
message;
msg;
@track veh;
connectedCallback(){

fetchAccount()
.then(result => {
this.acc = result;
console.log(JSON.stringify(result));
console.log("result",this.acc);
})
}
showroomFetch(event){
this.message = event.target.value;
console.log('Showroom Id-->'+this.message);
fetchShowrooms({accountId : this.message})
.then(result => {
this.show = result;

console.log(JSON.stringify(result));
console.log("result1",this.con);
})
.catch(error =>{
this.error = error;
})
this.msg = event.target.value;
console.log('Vehicle Id-->'+this.msg);
fetchVehicle({showroomId : this.message})
.then(result => {
this.veh = result;
console.log(JSON.stringify(result));
console.log("result2",this.veh);
})
.catch(error =>{
this.error = error;
})
}
}


