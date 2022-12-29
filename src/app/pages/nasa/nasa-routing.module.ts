import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NasaHomeComponent } from './components/nasa-home/nasa-home.component';
import { NasaResolver } from './resolvers/nasa.resolver';
import { NasaRoversComponent } from './components/nasa-rovers/nasa-rovers.component';
import { RoverCameraResolver } from './resolvers/rover-camera.resolver';


const routes: Routes = [
  {
    path: '',
    component: NasaHomeComponent,
    resolve: {
      pictures: NasaResolver
    }
  },
  {
    path: 'mars-rover',
    component: NasaRoversComponent,
    resolve: {
      roverPhotos: RoverCameraResolver
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
export class NasaRoutingModule { }
