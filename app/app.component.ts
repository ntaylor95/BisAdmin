import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeaderComponent } from './master/master.header';
import { FooterComponent } from './master/master.footer';
import { Nav, NavService } from './master/master.nav.service';
import { NavComponent } from './master/master.nav';

import { AccountSearchComponent } from './content/account/search.component';
import { ProspectSearchComponent } from './content/prospect/search.component';
import { ProspectEmployerComponent } from './content/prospect/employer/employer.component';
import { ProspectAddressComponent } from './content/prospect/employer/address.component';
import { HomeDashboardComponent } from './content/home/dashboard.component';

@Component({
    selector: 'main-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, FooterComponent, NavComponent, ROUTER_DIRECTIVES], //[HeaderComponent, FooterComponent, NavComponent],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        NavService
    ]
})

@RouteConfig([
    { path: '/', name: 'HomeDashboard', component: HomeDashboardComponent },
    { path: '/account', name: 'AccountSearch', component: AccountSearchComponent, useAsDefault: true },
    { path: '/prospect', name: 'ProspectSearch', component: ProspectSearchComponent },
    { path: '/taxagency', name: 'TaxAgencyDashboard', component: AccountSearchComponent },
    { path: '/utilities', name: 'UtilitiesDashboard', component: ProspectSearchComponent },
    { path: '/prospect/employer', name: 'ProspectEmployer', component: ProspectEmployerComponent },
    { path: '/prospect/address', name: 'ProspectWorksiteAddress', component: ProspectAddressComponent },

    //{ path: '/character/:id', name: 'Character', component: CharacterComponent },
    //{ path: '/vehicles', name: 'Vehicles', component: VehicleListComponent },
    //{ path: '/vehicle/:id', name: 'Vehicle', component: VehicleComponent }
])

export class AppComponent { }