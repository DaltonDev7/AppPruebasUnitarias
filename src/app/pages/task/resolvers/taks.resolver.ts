import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaksResolver implements Resolve<boolean> {

  constructor(private taskService: TaskService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.taskService.getTasks().pipe(take(1));
  }
}
