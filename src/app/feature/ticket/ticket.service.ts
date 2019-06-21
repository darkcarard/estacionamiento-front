import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/shared/model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl: string = 'http://localhost:8085/estacionamiento/tickets';
  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl);
  } 
}
