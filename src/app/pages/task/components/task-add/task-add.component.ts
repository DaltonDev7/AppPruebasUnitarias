import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  public status: any[] = [{ id: true, label: 'DONE' }, { id: false, label: 'PENDING' }]
  public taskForm!: FormGroup

  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.taskServices.getForm()
  }

  public saveStatus(event: any) {

  }

  public save(){
    console.log(this.taskForm.value);
    
  }

}
