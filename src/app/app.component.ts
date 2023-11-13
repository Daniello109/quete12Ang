import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasaService.service';
import { ImageModel } from './models/imageModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quete12';
  
  constructor(private ServiceNasa:NasaService) {
  }

    imgOfTheDay!:ImageModel;

    ngOnInit(): void {
      this.ServiceNasa.getImageOfTheDay().subscribe(imageFromNasaSite => {
      this.imgOfTheDay = imageFromNasaSite;
      console.log(this.imgOfTheDay) /* se puede utilizar  un console. log para ver el objeto entero que recuperamos, antes de crear el modelo*/
    })   

  }
  
}
