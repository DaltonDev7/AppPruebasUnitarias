import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaHomeComponent } from './components/nasa-home/nasa-home.component';
import { NasaRoversComponent } from './components/nasa-rovers/nasa-rovers.component';
import { NasaRoutingModule } from './nasa-routing.module';
import { NasaService } from './services/nasa.service';
import { NasaResolver } from './resolvers/nasa.resolver';
import { RoverCameraResolver } from './resolvers/rover-camera.resolver';
import { CardPhotoRoverComponent } from './components/card-photo-rover/card-photo-rover.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NasaHomeComponent,
    NasaRoversComponent,
    CardPhotoRoverComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    FormsModule
  ],
  providers: [
    NasaService,
    NasaResolver,
    RoverCameraResolver
  ]
})
export class NasaModule { }
