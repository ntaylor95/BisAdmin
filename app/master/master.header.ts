import { Component } from 'angular2/core';

@Component({
  selector: 'master-header',
  templateUrl: 'app/master/master.header.html',
  styleUrls: ['app/master/master.header.css']
})
export class HeaderComponent {    
    imagePath = 'assets/care-homepay-logo-small.png';
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