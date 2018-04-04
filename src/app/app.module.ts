import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component'
import {HeroService} from "./hero/service/hero.service";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
      HeroesComponent,
      DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
