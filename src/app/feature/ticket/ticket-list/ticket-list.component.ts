import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/shared/model/ticket'
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  private header: string = 'Tickets registrados';
  private title: string = 'Tickets';
  tickets: Observable<Ticket[]>;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tickets = this.ticketService.getTickets();
  }
}
