import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MarvelComponent } from './marvel/marvel.component';
import { NavbarComponent } from './navbar/navbar.component';


import { WinkelStratenService } from './services/winkelstraten.service';
import { VeloService } from './services/fietsstations.service';
import { WeatherService } from './services/weather.service';
import { AirQualityService } from './services/airquality.service';
import { MarvelService } from './services/marvel.service';



@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: MarvelComponent},
      { path: 'rest', component: MarvelComponent},
      { path: '*', component: MarvelComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
