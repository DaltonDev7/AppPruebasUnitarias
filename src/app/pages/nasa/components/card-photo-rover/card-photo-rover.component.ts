import { Component, OnInit, Input } from '@angular/core';
import { Photo, PhotoRovers } from 'src/app/core/interfaces/photo-rovers';

@Component({
  selector: 'card-photo-rover',
  templateUrl: './card-photo-rover.component.html',
  styleUrls: ['./card-photo-rover.component.scss']
})
export class CardPhotoRoverComponent implements OnInit {

  @Input() photoRover!: PhotoRovers

  constructor() { }

  ngOnInit(): void {
    console.log(this.photoRover);
    
  }

}
