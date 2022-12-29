import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private https: HttpClient) { }

  public getCocktailsByFirstLetter(letter: string = 'a') {
    return this.https.get<any>(`${environment.cocktailApi}/api/json/v1/1/search.php?f=${letter}`)
  }

  public getCocktailByName(name: string) {
    return this.https.get(`${environment.cocktailApi}/api/json/v1/1/search.php?i=${name}`)
  }

}
