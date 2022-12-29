import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nasa'
  },
  {
    path: 'nasa',
    loadChildren: () => import('./nasa/nasa.module').then(m => m.NasaModule)
  },
  {
    path: 'cocktail',
    loadChildren: () => import('./cocktail/cocktail.module').then(m => m.CocktailModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
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
export class PagesRoutingModule { }
