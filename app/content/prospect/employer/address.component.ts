import { Component } from 'angular2/core';

@Component({
    selector: 'prospect-address',
    templateUrl: 'app/content/prospect/employer/address.component.html'
})
export class ProspectAddressComponent {
    messages: string[] = [];

    logout() {
        alert('logging this person out');
    };

    log(msg: string, data: string) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        };
        alert(msg);
    };
}