import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { TaskService } from '../services/task.service';

@Injectable()
export class GetTasksIdResolver implements Resolve<boolean> {
 
  constructor(private taskService: TaskService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let id = route.params['id']
    return this.taskService.getTasksById(id).pipe(take(1));
  }
}
