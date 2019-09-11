import { environment } from './../../../../../environments/environment.prod';
import { LocalStorageService } from './../../../../shared/service/local-storage.service';
import { Task } from '../../../../shared/interfaces/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList: Array<Task> = [];
  constructor(private localStorageService: LocalStorageService) { }
ngOnChanges(){
  
}
  ngOnInit() {

  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);    
    this.localStorageService.updateAll('tasks', this.taskList);  
  }

  
}
