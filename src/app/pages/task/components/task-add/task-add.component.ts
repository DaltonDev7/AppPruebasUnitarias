import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  public status: any[] = [{ id: true, label: 'DONE' }, { id: false, label: 'PENDING' }]
  public taskForm!: FormGroup

  constructor(private taskServices: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.taskServices.getForm()
  }

  public saveStatus(event: any) {
  }

  public save() {
    console.log(this.taskForm.value);

    let status = this.taskForm.get('status')?.value;
    this.taskForm.get('status')?.setValue(Boolean(JSON.parse(status)))
    
    this.taskServices.Add(this.taskForm.value).subscribe({
      next: () => {
        this.router.navigate(['/task'])
      }
    })
  }

}
