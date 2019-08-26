import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';//VERRRRR!
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../../../shared/interfaces/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public modalRef: BsModalRef;
  public newTaskForm: FormGroup;
  @Output() newTask = new EventEmitter<Task>();

  constructor(private modalService: BsModalService) {

  }

  ngOnInit() {
    this.buildForm();

  }
  buildForm(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(1)]),
      description: new FormControl("", [Validators.required]),
      date: new FormControl(null),
      deadLine: new FormControl("", [Validators.required])
    });
  }
  public openAddModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.newTaskForm.get('date').setValue(new Date());
  }
  public confirmTask(): void {

    this.newTask.emit(this.newTaskForm.value);

    this.modalRef.hide();
    this.newTaskForm.reset();
  }
}
