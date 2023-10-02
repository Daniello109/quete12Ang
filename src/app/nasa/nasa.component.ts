import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { ImageModel } from '../models/imageModel';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit{


  constructor(private ServiceNasa:NasaService) {
  }

    imageOfTheDay!:ImageModel;

    ngOnInit(): void {
      this.ServiceNasa.getImageOfTheDay().subscribe(imageFromNasaSite => {
      this.imageOfTheDay = imageFromNasaSite;
      console.log(this.imageOfTheDay) /* se puede utilizar  un console. log para ver el objeto entero que recuperamos, antes de crear el modelo*/
    })   

  }
}
