import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { FruitsRoutingModule } from './fruits/fruits-routing.module';
import { FruitsModule } from './fruits/fruits.module';
import { CreateComponent } from './factures/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsRoutingModule,
    HttpClientModule,
    FruitsModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
