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

onUserSelect(event: User) {
this.selectedUser = event;
}
}
