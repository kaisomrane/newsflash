import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allCategory: Category[] = [];
    deleteModal: any;
    idTodelete: number = 0;
   
    constructor(private cS: CategoryService) {}
    ngOnInit(): void {
       this.deleteModal = new window.bootstrap.Modal(
        document.getElementById('deleteModal')
      );
      this.get();
    }
   
    get() {
      this.cS.getAll().subscribe((data) => {
        this.allCategory = data;
        console.log("data=",data);
      });
    }
    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
   
    delete() {
      this.cS.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.allCategory = this.allCategory.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
    }
  
  }
  