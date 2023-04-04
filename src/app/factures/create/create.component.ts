import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factures } from '../factures';
//import { facturesService } from '../factures.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent
{/* implements OnInit {
  
  factureForm: Factures = {
    id: 0,
    nameclient: '',
    article: 0,
    numerofacture: 0,
  };
 
  constructor(private factureservice:facturesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.factureservice.create(this.factureForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/factures/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  */
}