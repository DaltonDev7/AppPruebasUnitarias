import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { CocktailService } from '../services/cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailResolver implements Resolve<boolean> {

  constructor(private cocktailServices: CocktailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   return this.cocktailServices.getCocktailsByFirstLetter().pipe(take(1));
  }
}
