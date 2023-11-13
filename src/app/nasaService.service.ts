import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageModel } from './models/imageModel';
@Injectable({
  providedIn: 'root'
})
export class NasaService {


  imgOfTheDay!:ImageModel;

  constructor(private nasaImageRequest: HttpClient) { }
  

  getImageOfTheDay(): Observable<any> {
  return this.nasaImageRequest.get<any>("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  
  }

}
