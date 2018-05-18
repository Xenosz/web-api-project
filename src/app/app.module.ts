import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';




import { WinkelStratenService } from './services/winkelstraten.service';
import { VeloService } from './services/fietsstations.service';
import { WeatherService } from './services/weather.service';
import { AirQualityService } from './services/airquality.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'rest', component: HomeComponent},
      { path: '', component: HomeComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
