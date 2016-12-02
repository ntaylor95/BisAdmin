import { Component } from 'angular2/core';
import { Nav, NavService } from './master.nav.service';
import { VehicleComponent } from './vehicle.component';

@Component({
    selector: 'my-vehicle-list',
    templateUrl: 'app/master/vehicle-list.component.html',
    styles: ['li {cursor: pointer;} .error {color:red;}'],
    directives: [VehicleComponent]
})
export class VehicleListComponent {
    errorMessage: string;
    vehicles: Nav[];
    selectedVehicle: Nav;

    constructor(private _vehicleService: NavService) { }

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        this._vehicleService.getVehicles()
            .subscribe(
            vehicles => this.vehicles = vehicles,
            error => this.errorMessage = <any>error
            );
    }

    select(vehicle: Nav) {
        this.selectedVehicle = vehicle;
    }
}

