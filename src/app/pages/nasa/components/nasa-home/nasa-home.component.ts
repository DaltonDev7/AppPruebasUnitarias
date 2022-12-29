import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseImageDay } from 'src/app/core/interfaces/response-image-day';

@Component({
  selector: 'app-nasa-home',
  templateUrl: './nasa-home.component.html',
  styleUrls: ['./nasa-home.component.scss']
})
export class NasaHomeComponent implements OnInit {

  public picturesDays: ResponseImageDay[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe({
      next: ((data: any) => {
        this.picturesDays = data.pictures;
      })
    })
  }

  public goMarsSection(): void {
    this.router.navigate(['/mars-rover'], { relativeTo: this.activedRouted })
  }

}
