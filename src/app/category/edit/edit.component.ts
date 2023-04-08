import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    categoryForm: Category = {
      id: 0,
      name: '',
      description: ''
    };
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private cS: CategoryService
    ) {}
   
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
    }
   
    getById(id: number) {
      this.cS.getById(id).subscribe((data) => {
        this.categoryForm = data;
      });
    }
   
    update() {
      this.cS.update(this.categoryForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/category/home"]);
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
  }
