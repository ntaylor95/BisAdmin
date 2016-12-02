import { Component } from 'angular2/core';

@Component({
    selector: 'account-search',
    templateUrl: 'app/content/account/search.component.html'
})
export class AccountSearchComponent {
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