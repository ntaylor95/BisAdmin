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
var ProspectAddressComponent = (function () {
    function ProspectAddressComponent() {
        this.messages = [];
    }
    ProspectAddressComponent.prototype.logout = function () {
        alert('logging this person out');
    };
    ;
    ProspectAddressComponent.prototype.log = function (msg, data) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        }
        ;
        alert(msg);
    };
    ;
    ProspectAddressComponent = __decorate([
        core_1.Component({
            selector: 'prospect-address',
            templateUrl: 'app/content/prospect/employer/address.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProspectAddressComponent);
    return ProspectAddressComponent;
}());
exports.ProspectAddressComponent = ProspectAddressComponent;
//# sourceMappingURL=address.component.js.map