import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsService } from 'src/app/core/services/brands.service';
import { HttpErrorResponse } from '@angular/common/http';
import { brandsList } from 'src/app/core/interfaces/brands';
import { Metadata } from 'src/app/core/interfaces/categories';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _BrandsService:BrandsService){}

  allBrandList?:brandsList[];
  allBrandMetaData?:Metadata;
  allBrandResults?:number;
  currentPage?:number ;
  limit?:number;
  ngOnInit(): void {
    this.all();
   
  }

  all(){

    this._BrandsService.allBrands().subscribe(
      {
        next:(result)=>{
          console.log(result);
         
          this.allBrandList=result.data
          this.allBrandMetaData=result.metadata
          this.allBrandResults=result.results;
          this.currentPage= this.allBrandMetaData?.currentPage;
          this.limit= this.allBrandMetaData?.limit;
         

        }
        ,
        error:(error:HttpErrorResponse)=>{
          console.log("error occurred during get all brands"); 
        }
      }
      
      
      
    )

  }

  

}
