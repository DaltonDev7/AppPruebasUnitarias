import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  public status: any[] = [{ id: true, label: 'DONE' }, { id: false, label: 'PENDING' }]
  public taskForm!: FormGroup
  public task!: Task

  constructor(private taskServices: TaskService, private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskForm = this.taskServices.getForm()
    this.activedRouted.data.subscribe({
      next: (data: any) => {
        console.log(data);

        this.taskForm.patchValue(data.task)
        this.task = data.task
      }
    })

  }


  public update() {

    let status = this.taskForm.get('status')?.value;
    this.taskForm.get('status')?.setValue(Boolean(JSON.parse(status)))

    console.log(this.task);

    let payload = { ...this.task, ...this.taskForm.value }
    console.log(payload);


    this.taskServices.Update(payload).subscribe({
      next: () => {
        console.log('actualizado');
        this.router.navigate(['task'])
      }
    })
  }
}
