import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/model/vehicle'; 
import { Observable } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Observable<Vehicle[]>;
  private header: string = 'Vehículos';
  private title: string = 'Listado de Vehículos estacionados';
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData () {
    this.vehicles = this.vehicleService.getVehicles();
  }

}
