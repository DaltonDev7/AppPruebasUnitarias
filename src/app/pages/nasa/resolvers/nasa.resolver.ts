import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { NasaService } from '../services/nasa.service';

@Injectable()
export class NasaResolver implements Resolve<boolean> {

  constructor(private nasaServices: NasaService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<any> | Promise<boolean> {
    return this.nasaServices.getImageOfDay().pipe(take(1))
  }

 
}
