"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var master_header_1 = require('./master/master.header');
var master_footer_1 = require('./master/master.footer');
var master_nav_service_1 = require('./master/master.nav.service');
var master_nav_1 = require('./master/master.nav');
var search_component_1 = require('./content/account/search.component');
var search_component_2 = require('./content/prospect/search.component');
var employer_component_1 = require('./content/prospect/employer/employer.component');
var address_component_1 = require('./content/prospect/employer/address.component');
var dashboard_component_1 = require('./content/home/dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            templateUrl: 'app/app.component.html',
            directives: [master_header_1.HeaderComponent, master_footer_1.FooterComponent, master_nav_1.NavComponent, router_1.ROUTER_DIRECTIVES],
            providers: [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                master_nav_service_1.NavService
            ]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'HomeDashboard', component: dashboard_component_1.HomeDashboardComponent },
            { path: '/account', name: 'AccountSearch', component: search_component_1.AccountSearchComponent, useAsDefault: true },
            { path: '/prospect', name: 'ProspectSearch', component: search_component_2.ProspectSearchComponent },
            { path: '/taxagency', name: 'TaxAgencyDashboard', component: search_component_1.AccountSearchComponent },
            { path: '/utilities', name: 'UtilitiesDashboard', component: search_component_2.ProspectSearchComponent },
            { path: '/prospect/employer', name: 'ProspectEmployer', component: employer_component_1.ProspectEmployerComponent },
            { path: '/prospect/address', name: 'ProspectWorksiteAddress', component: address_component_1.ProspectAddressComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map