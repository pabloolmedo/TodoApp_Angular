import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Task } from '../../../../shared/interfaces/task';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public editTaskForm: FormGroup;
  public isEditing = false;  
  public previoudData: any;

  @Input() task: Task; 
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.buildForm(this.task);
    this.editTaskForm.disable();
  }

buildForm(task: Task):void{
  debugger
  this.editTaskForm = new FormGroup({
    title: new FormControl(task.title, [Validators.required]),
    description: new FormControl(task.description, [Validators.required]),
    deadLine: new FormControl(new Date(task.deadLine), [Validators.required])
  });

}

  deleteTask(): void {
    this.delete.emit();
  }
  

  editTask(task: Task): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editTaskForm.enable();
      this.previoudData = this.editTaskForm.value;
    }
    else {
      this.editTaskForm.setValue(this.previoudData);
      this.editTaskForm.disable();
    }

  }

  saveTask(task: Task): void {
    this.isEditing = !this.isEditing;
    Object.assign(task, this.editTaskForm.value)
    this.editTaskForm.disable();
    this.update.emit();
  }

  markAsDone(task: Task): void {
    task.isDone = !task.isDone;
    this.update.emit();
  }

}
