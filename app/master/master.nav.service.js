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
var Rx_1 = require('rxjs/Rx');
var Nav = (function () {
    function Nav(id, name, router, children) {
        this.id = id;
        this.name = name;
        this.router = router;
        this.children = children;
    }
    return Nav;
}());
exports.Nav = Nav;
var NavService = (function () {
    function NavService(_http) {
        this._http = _http;
    }
    NavService.prototype.getVehicles = function () {
        return this._http.get('api/MainNav.json')
            .map(function (response) { return response.json().data; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    NavService.prototype.getSecondary = function (id) {
        return this.getVehicles()
            .map(function (navs) { return navs.find(function (nav) { return nav.id == id; }).children; })
            .do(function (navs) { return console.log(navs); });
    };
    NavService.prototype.getTertiary = function (id) {
        return this.getSecondary(id)
            .map(function (navs) { return navs.find(function (nav) { return nav.id == id; }).children; })
            .do(function (navs) { return console.log(navs); });
    };
    NavService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    NavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], NavService);
    return NavService;
    var _a;
}());
exports.NavService = NavService;
//# sourceMappingURL=master.nav.service.js.map