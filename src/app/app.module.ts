import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { DecoratorComponent } from './decorator/decorator.component';

const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'users', component: UsersComponent },
{ path: 'table', component: TableComponent },
{ path: 'decorator', component: DecoratorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    FormsComponent,
    TableComponent,
    DecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
