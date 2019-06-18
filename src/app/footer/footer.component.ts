import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author: string = 'Carlos Javier Ardila Bohórquez';
  

  constructor() { }

  ngOnInit() {
  }

}
