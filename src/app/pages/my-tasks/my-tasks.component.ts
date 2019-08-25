import { Task } from './../../shared/interfaces/task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
 public myTasks: Array<Task> = [];
  constructor() { }


  ngOnInit() {
  }
  onNewTask(task : Task) : void{
    this.myTasks.push(task);
   

  }
}
