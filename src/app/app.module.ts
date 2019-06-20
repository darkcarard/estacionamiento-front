import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleListComponent } from './feature/vehicle/vehicle-list/vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './feature/ticket/ticket-list/ticket-list.component'; 

const routes: Routes = [
  {path: '', redirectTo: '/parking', pathMatch: 'full'},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'tickets', component: TicketListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VehicleListComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
