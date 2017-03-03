import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from '../modules/dashboard/dashboard.component';
import { PeopleComponent } from '../modules/people/people.component';

const routes: Routes = [
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'edit-month/:id',
        component: DashBoardComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'edit-person/:id',
        component: PeopleComponent
      }
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
