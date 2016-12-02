import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Nav, NavService } from './master.nav.service';
import { NavSecondaryComponent } from './master.nav.secondary';

@Component({
    selector: 'master-nav',
    templateUrl: 'app/master/master.nav.html',
    styleUrls: ['app/master/master.nav.css'],
    directives: [ROUTER_DIRECTIVES, NavSecondaryComponent]
})
export class NavComponent {
    errorMessage: string;
    navs: Observable<Nav[]>;
    selectedNav: Observable<Nav>;
    selectedStatus: Array<boolean> = [];
    selectedIndex = 0;
    messages: string[] = [];

    constructor(private _navService: NavService) { }

    ngOnInit() { this.navs = this.getNavs(); this.selectedNav = this.getChildren(14); }

    getNavs() {
        this._navService.getVehicles()
            .subscribe(
            navs => this.navs = navs,
            error => this.errorMessage = <any>error
        );
    }

    getChildren(id: number) {
        this._navService.getSecondary(id)
            .subscribe(
            selectedNav => this.selectedNav = selectedNav,
            error => this.errorMessage = <any>error
        );
    }

    select(nav: Nav) {
        this.selectedNav = nav.children;
        //alert(nav.id);
        //alert(nav.id);
    }

    log(msg: string, data: string) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        };
        alert(msg);
    };
}