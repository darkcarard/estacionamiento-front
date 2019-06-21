import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private httpHeaders: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer 2fde388e-434a-45a2-8712-ffbd3ba56f3f'});
  private baseUrl: string = 'http://localhost:8762/estacionamiento/vehiculos';
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    
    return this.http.get<Vehicle[]>(this.baseUrl, {headers: this.httpHeaders});
  }
}
