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
var router_1 = require('angular2/router');
var master_nav_service_1 = require('./master.nav.service');
var master_nav_secondary_1 = require('./master.nav.secondary');
var NavComponent = (function () {
    function NavComponent(_navService) {
        this._navService = _navService;
        this.selectedStatus = [];
        this.selectedIndex = 0;
        this.messages = [];
    }
    NavComponent.prototype.ngOnInit = function () { this.navs = this.getNavs(); this.selectedNav = this.getChildren(14); };
    NavComponent.prototype.getNavs = function () {
        var _this = this;
        this._navService.getVehicles()
            .subscribe(function (navs) { return _this.navs = navs; }, function (error) { return _this.errorMessage = error; });
    };
    NavComponent.prototype.getChildren = function (id) {
        var _this = this;
        this._navService.getSecondary(id)
            .subscribe(function (selectedNav) { return _this.selectedNav = selectedNav; }, function (error) { return _this.errorMessage = error; });
    };
    NavComponent.prototype.select = function (nav) {
        this.selectedNav = nav.children;
        //alert(nav.id);
        //alert(nav.id);
    };
    NavComponent.prototype.log = function (msg, data) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        }
        ;
        alert(msg);
    };
    ;
    NavComponent = __decorate([
        core_1.Component({
            selector: 'master-nav',
            templateUrl: 'app/master/master.nav.html',
            styleUrls: ['app/master/master.nav.css'],
            directives: [router_1.ROUTER_DIRECTIVES, master_nav_secondary_1.NavSecondaryComponent]
        }), 
        __metadata('design:paramtypes', [master_nav_service_1.NavService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=master.nav.js.map