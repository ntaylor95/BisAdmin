import { Component } from 'angular2/core';

@Component({
    selector: 'prospect-search',
    templateUrl: 'app/content/prospect/search.component.html'
})
export class ProspectSearchComponent {
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