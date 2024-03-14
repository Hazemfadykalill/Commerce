import { Metadata } from '../../core/interfaces/product';
 import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { ProductList } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // responseAllProduct?:ProductList[];
  responseAllProduct?:any;
  responseAllWishlist?:any;
  metaData?:Metadata;
  totalResult?:number;
  itemsPerPage?:number;
  currentPage?:number;
  responseAllWishListData:string[] = [];
 
  clickFlag:boolean=false;

  constructor(private _ProductsService:ProductsService ,private _CartService:CartService,private toast:ToastrService,private _WishListService:WishListService,private tost:ToastrService){}
  ngOnInit(): void {
    this.pageData()
 
  }

// pagination
  pageData(page:number=1){
    this._ProductsService.getProductByPage(page).subscribe({
      next:(response)=>{
        console.log(response);
        // response.results number count all product
        // response.metadata{} limit current page number of page
        // response.data[] all products
        
        this.responseAllProduct=response.data;
        this.metaData=response.metadata;
        this.itemsPerPage=this.metaData?.limit;
        this.currentPage=this.metaData?.currentPage;
        
        this.totalResult=response.results;
        
        

     
        
      },
      error:(error:HttpErrorResponse)=>{
        console.log("when get all product found problem")
      }
    });

  }

  pageChanged(event:any):void{
    this.pageData(event);


  }

  addProduct(id:string):void{
    this.clickFlag=true;
        this._CartService.addProductToCart(id).subscribe({
          next:(response)=>{
            this.clickFlag=false;
            this.toast.success(response.message);
            // behavior subject
            this._CartService.cartNumber.next(response.numOfCartItems);
            localStorage.setItem('cartNumber',response.numOfCartItems)
          },
          error:(error:HttpErrorResponse)=>{
            this.clickFlag= false;
            this.toast.error(error.error.message);
          }
        });
    
      }

      addToWishList(id:string):void{ 

        this._WishListService.addToWish(id).subscribe({
          next:(response)=>{
            console.log(response);
         this._WishListService.countNumber.next(response.data.length);
            this.responseAllWishlist=response;
            this.responseAllWishListData=this.responseAllWishlist?.data
            
            this.tost.success(response.message);
          }
          ,
        error:(error:HttpErrorResponse)=>{
          this.tost.success("error when add to wish list");
        
        }
        })
    
    
    
      
    }
    
    // remove from wishList
          // remove
          removeProduct(id:string):void{
            this._WishListService.remove(id).subscribe({
              next:(response)=>{
                // console.log(response.data.length)
            
            this.responseAllWishListData=this.responseAllWishlist?.data
                 
                this._WishListService.countNumber.next(response.data.length)
    
              }
            })
    
          }



}
