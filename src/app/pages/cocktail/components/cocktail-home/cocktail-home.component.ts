import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/core/interfaces/cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-home',
  templateUrl: './cocktail-home.component.html',
  styleUrls: ['./cocktail-home.component.scss']
})
export class CocktailHomeComponent implements OnInit {

  public drink: string = 'a'
  public drinksList: Drink[] = []

  constructor(
    private cockTailService: CocktailService,
    private activedRouted: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.activedRouted.data.subscribe({
      next: ((data: any) => {
        this.drinksList = data.drinks.drinks
      })
    })
  }

  searchCocktel(event: any) {
    if(event !== ""){
      this.cockTailService.getCocktailsByFirstLetter(event).subscribe({
        next:((data:any)=>{
          this.drinksList = data.drinks
        })
      })

    }
    
  }

}
