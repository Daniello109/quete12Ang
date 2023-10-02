import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';
import { HttpClientModule } from '@angular/common/http';
import { NasaService } from './services/nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
  ], 
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
