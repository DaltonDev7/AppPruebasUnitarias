import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailHomeComponent } from './components/cocktail-home/cocktail-home.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailRoutingModule } from './cocktail-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CocktailHomeComponent,
    CocktailDetailComponent,
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    FormsModule 
  ]
})
export class CocktailModule { }
