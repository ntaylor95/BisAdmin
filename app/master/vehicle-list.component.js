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
var master_nav_service_1 = require('./master.nav.service');
var vehicle_component_1 = require('./vehicle.component');
var VehicleListComponent = (function () {
    function VehicleListComponent(_vehicleService) {
        this._vehicleService = _vehicleService;
    }
    VehicleListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    VehicleListComponent.prototype.getHeroes = function () {
        var _this = this;
        this._vehicleService.getVehicles()
            .subscribe(function (vehicles) { return _this.vehicles = vehicles; }, function (error) { return _this.errorMessage = error; });
    };
    VehicleListComponent.prototype.select = function (vehicle) {
        this.selectedVehicle = vehicle;
    };
    VehicleListComponent = __decorate([
        core_1.Component({
            selector: 'my-vehicle-list',
            templateUrl: 'app/master/vehicle-list.component.html',
            styles: ['li {cursor: pointer;} .error {color:red;}'],
            directives: [vehicle_component_1.VehicleComponent]
        }), 
        __metadata('design:paramtypes', [master_nav_service_1.NavService])
    ], VehicleListComponent);
    return VehicleListComponent;
}());
exports.VehicleListComponent = VehicleListComponent;
//# sourceMappingURL=vehicle-list.component.js.map