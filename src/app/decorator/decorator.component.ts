import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput')  age!: ElementRef;
  @ViewChild(DecoratorComponent, {static: true}) decoratorComp!: DecoratorComponent;

  constructor() { }
  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    console.log(this.dateOfBirth);
    console.log(this.age);
  } 
  ngOnInit(): void {
  }

}
