import { Component } from 'angular2/core';

@Component({
    selector: 'prospect-employer',
    templateUrl: 'app/content/prospect/employer/employer.component.html'
})
export class ProspectEmployerComponent {
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