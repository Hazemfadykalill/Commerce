import { AllCart } from '../../core/interfaces/all-cart';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatgoriesService } from 'src/app/core/services/catgories.service';
import { Metadata, categoryList } from 'src/app/core/interfaces/categories';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  AllCategoriesList?:categoryList[] ;
  AllCategoriesMetadata?:Metadata ;
  AllCategoriesResults?:number ;
  currentPage?:number ;
  limit?:number;
  constructor(private _categoryServices:CatgoriesService){}
 
  ngOnInit(): void {
    this.all();
   
  }

  all(){
    this._categoryServices.getAllCategories().subscribe({
      next:(result)=>{
        console.log(result)
        this.AllCategoriesList = result.data;
        this.AllCategoriesMetadata = result.metadata;
       this.currentPage= this.AllCategoriesMetadata?.currentPage;
       this.limit= this.AllCategoriesMetadata?.limit;
        
        this.AllCategoriesResults = result.results;
      },
      error:(error)=>{
        console.log("error occurred when getting all categories"); 
      }
    })

    

  }
 
}
