import { Component, Input } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';

import { Nav } from './master.nav.service';

@Component({
    selector: 'master-nav-secondary',
    templateUrl: 'app/master/master.nav.secondary.html',
    styleUrls: ['app/master/master.nav.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavSecondaryComponent {
    @Input() secondaryNavs: Observable<Nav[]>;
}