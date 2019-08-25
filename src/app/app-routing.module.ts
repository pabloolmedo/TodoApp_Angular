import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentHomeComponent } from './pages/component-home/component-home.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';

const routes: Routes = [
  {
    path: 'home',
    component: ComponentHomeComponent
  },
  {
    path: 'mytask',
    component: MyTasksComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '** ',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
