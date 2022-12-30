import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/core/interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public task: Task[] = []

  constructor(private taskServices: TaskService, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.task = data.tasks
    })
  }

  public delete(id: number) {
    this.taskServices.Delete(id).subscribe({
      next: () => {
        console.log('eliminado');
        this.getTasks();
      }
    })
  }

  public getTasks() {
    this.taskServices.getTasks().subscribe({
      next: ((data: Task[]) => {
        this.task = data
      })
    })
  }

}
