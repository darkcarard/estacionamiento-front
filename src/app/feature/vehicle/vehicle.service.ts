import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl: string = 'http://localhost:8085/estacionamiento/vehiculos';
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }
}
