import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users: User[] | null = null;
selectedUser: User | null = null;


@ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput')  age!: ElementRef;
  @ViewChild(UsersComponent, {static: true}) usersComp!: UsersComponent;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  } 

contactForm = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  email: new FormControl(),
  gender: new FormControl(),
  isMarried: new FormControl(),
  unMarried: new FormControl(),
  country: new FormControl()
}) 

constructor() {
  this.users = [
      new User(1, 'Person 1', 'Hyderabad', 'Software'),
      new User(2, 'Person 2', 'Mumbai', 'Sales'),
  ];
  
   console.log(this.users);
}

trackUser(index: number, user: User) {
  return user ? user.id : undefined;
}

onSubmit() {
  console.log(this.contactForm.value);
}

onUserSelect(event: User) {
this.selectedUser = event;
}
}
