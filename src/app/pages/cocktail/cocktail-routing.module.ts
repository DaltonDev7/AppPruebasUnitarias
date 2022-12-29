import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CocktailHomeComponent } from './components/cocktail-home/cocktail-home.component';
import { CocktailResolver } from './resolvers/cocktail.resolver';


const routes: Routes = [
  {
    path: '',
    component: CocktailHomeComponent,
    resolve:{
      drinks: CocktailResolver
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CocktailRoutingModule { }
