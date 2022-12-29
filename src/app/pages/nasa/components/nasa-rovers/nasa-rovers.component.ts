import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo, PhotoRovers } from 'src/app/core/interfaces/photo-rovers';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-nasa-rovers',
  templateUrl: './nasa-rovers.component.html',
  styleUrls: ['./nasa-rovers.component.scss']
})
export class NasaRoversComponent implements OnInit {

  public photoRovers: PhotoRovers[] = []
  public selectCamera: string = ''
  public camerasOptions = [
    { id: 'FHAZ', name: 'FHAZ' },
    { id: 'NAVCAM', name: 'NAVCAM' },
    { id: 'RHAZ', name: 'RHAZ' },
    { id: 'CHEMCAM', name: 'CHEMCAM' },
  ];

  constructor(
    private activedRouted: ActivatedRoute,
    private nasaServices: NasaService
  ) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.photoRovers = data.roverPhotos.photos
    })
  }

  public searchImageByCamera(camera: any) {
    this.nasaServices.getPhotosRoversMars(camera).subscribe({
      next: ((data: Photo) => {
        this.photoRovers = data.photos
      })
    })
  }


}
