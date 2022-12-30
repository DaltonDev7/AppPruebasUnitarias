import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/interfaces/task';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService {

  constructor(private https: HttpClient, private fb: FormBuilder) { }

  public getForm(): FormGroup {
    return this.fb.group({
      description: [null, [Validators.required]],
      status: [null, [Validators.required]]
    })
  }

  public getTasks(): Observable<Task[]> {
    return this.https.get<Task[]>(`${environment.taskApi}/task`)
  }

  public getTasksById(id: number): Observable<Task> {
    return this.https.get<Task>(`${environment.taskApi}/task/getById/${id}`)
  }

  public Add(task: Task): Observable<Task> {
    return this.https.post<Task>(`${environment.taskApi}/task`, task)
  }

  public Update(task: Task): Observable<Task> {
    return this.https.put<Task>(`${environment.taskApi}/task`, task)
  }

  public Delete(id: number) {
    return this.https.delete(`${environment.taskApi}/task/delete/${id}`)
  }
  
}
