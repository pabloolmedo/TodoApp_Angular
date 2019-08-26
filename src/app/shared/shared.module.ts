import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { TaskComponent } from '../pages/my-tasks/components/task/task.component';
import { AddTaskComponent } from '../pages/my-tasks/components/add-task/add-task.component';
import { TaskListComponent } from '../pages/my-tasks/components/task-list/task-list.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    TaskListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    TaskComponent,
    AddTaskComponent,
    TaskListComponent
  ]
})
export class SharedModule { }
