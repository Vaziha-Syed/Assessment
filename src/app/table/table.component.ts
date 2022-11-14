import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
title: string = 'User-Names';
data:Array<any>
People:any;

  constructor() { 
    this.data=[
    { FirstName: 'Roshan', LastName: 'Syed', Age: '22'},
    { FirstName: 'Vinay', LastName: 'Kumar', Age: '22'},
    { FirstName: 'Syamala', LastName: 'Syam', Age: '21'},
    { FirstName: 'Bose', LastName: 'Chowdary', Age: '22'},
    { FirstName: 'Chandu', LastName: 'Arla', Age: '22'}
  ];
  }
}
