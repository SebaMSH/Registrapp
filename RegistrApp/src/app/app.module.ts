import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import {DataBaseServiceService} from '../app/servicios/data-base-service.service';	


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite,
    SQLitePorter,],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(db: DataBaseServiceService){}

}
