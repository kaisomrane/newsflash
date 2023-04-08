import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allCategory: Category[] = [];
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category:{    id: 0,
      name: '',
      description: ''}
  };
 
  constructor(private cS: CategoryService,
    private fruitService:FruitsService,
    private router:Router) {}
 
  ngOnInit(): void {
    console.log("entering create fruit ....");
    this.get();
  }

  get() {
    console.log("Get all categories ....");
    this.cS.getAll().subscribe((data) => {
      this.allCategory = data;
      console.log("data=",data);
    });
  }  


  create(){
    console.log("FruitForm : ",this.fruitForm);
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}