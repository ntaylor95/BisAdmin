import { Component } from 'angular2/core';

@Component({
    selector: 'home-dashboard',
    templateUrl: 'app/content/home/dashboard.component.html'
})
export class HomeDashboardComponent {
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