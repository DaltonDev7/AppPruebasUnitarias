import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo, PhotoRovers } from 'src/app/core/interfaces/photo-rovers';
import { ResponseImageDay } from 'src/app/core/interfaces/response-image-day';
import { environment } from 'src/environments/environment';

@Injectable()
export class NasaService {

  private count: number = 6

  constructor(private https: HttpClient) { }

  public getImageOfDay(): Observable<ResponseImageDay[]> {
    return this.https.get<ResponseImageDay[]>(`${environment.nasaApi}/planetary/apod?&count=${this.count}&api_key=${environment.nasaKey}`)
  }

  public getPhotosRoversMars(cameraName: string = "FHAZ"): Observable<Photo> {
    return this.https.get<Photo>(`${environment.nasaApi}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameraName}&api_key=${environment.nasaKey}`)
  }


}
