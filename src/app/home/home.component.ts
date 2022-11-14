import { Component, HostBinding, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  color:string = 'green';

  constructor() { 
  }

  ngOnInit(): void {
  }
}
