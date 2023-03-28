import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsRoutingModule } from './fruits/fruits-routing.module';
import { FruitsModule } from './fruits/fruits.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsRoutingModule,
    HttpClientModule,
    FruitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
