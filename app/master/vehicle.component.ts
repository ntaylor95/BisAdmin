import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { Nav } from './master.nav.service';

@Component({
    selector: 'my-vehicle',
    templateUrl: 'app/master/vehicle.component.html'
})
export class VehicleComponent {
    @Input() vehicle: Nav;
}

