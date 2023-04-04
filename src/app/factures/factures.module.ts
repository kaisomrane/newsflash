import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    FormsModule

  ]
})
export class FacturesModule { }