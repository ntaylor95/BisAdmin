import { Component } from 'angular2/core';

@Component({
    selector: 'master-footer',
    templateUrl: 'app/master/master.footer.html',
    styleUrls: ['app/master/master.footer.css']
})
export class FooterComponent {
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