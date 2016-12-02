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
var AccountSearchComponent = (function () {
    function AccountSearchComponent() {
        this.messages = [];
    }
    AccountSearchComponent.prototype.logout = function () {
        alert('logging this person out');
    };
    ;
    AccountSearchComponent.prototype.log = function (msg, data) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        }
        ;
        alert(msg);
    };
    ;
    AccountSearchComponent = __decorate([
        core_1.Component({
            selector: 'account-search',
            templateUrl: 'app/content/account/search.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AccountSearchComponent);
    return AccountSearchComponent;
}());
exports.AccountSearchComponent = AccountSearchComponent;
//# sourceMappingURL=search.component.js.map