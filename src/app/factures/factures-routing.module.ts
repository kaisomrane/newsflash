import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'factures/home',
    component: HomeComponent,
  },
  {
    path: 'factures/create',
    component: CreateComponent,
  },
  {
    path:'factures/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
