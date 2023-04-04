import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Factures } from '../factures';
//import { facturesService } from '../factures.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent 
  {/*implements OnInit {
  factureForm: factures = {
    id: 0,
    nameclient: '',
    article: 0,
    numerofacture: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private factureservice: facturesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.factureservice.getById(id).subscribe((data) => {
      this.factureForm = data;
    });
  }
 
  update() {
    this.factureservice.update(this.factureForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/factures/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
*/
}