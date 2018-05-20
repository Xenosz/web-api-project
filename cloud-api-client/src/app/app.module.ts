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

import { MarvelService } from './services/marvel.service';
import { PeopleNJobsService } from './services/peoplenjobs.service';
import { RestComponent } from './restapi/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    NavbarComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: MarvelComponent},
      { path: 'rest', component: RestComponent},
      { path: '*', component: MarvelComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MarvelService,
    PeopleNJobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
