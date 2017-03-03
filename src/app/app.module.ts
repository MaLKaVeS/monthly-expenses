import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { PeopleService } from './services/people.service';

import { MenuComponent } from './components/menu/menu.component';
import { DashBoardComponent } from './modules/dashboard/dashboard.component';
import { PeopleComponent } from './modules/people/people.component';

import { AppComponent } from './app.component';
import { RoutingModule } from './routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashBoardComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
