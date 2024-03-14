import { AllWishList, AllWishListData } from '../../core/interfaces/wish-list';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from 'src/app/core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  constructor(private _WishListService: WishListService,private _CartService:CartService,private tost:ToastrService) { }
  allWishListData?: any;
  clickFlag:boolean=false;
  count?:number;
  allWishList?: AllWishList[];
  ngOnInit(): void {
    this._WishListService.getAllWishList().subscribe({
      next: (result) => {
        
        this.allWishListData = result;
        
        this.allWishList = this.allWishListData?.data;
        this.count=this.allWishListData?.count
      },
      error: (error: HttpErrorResponse) => {
        console.log("Error occurred during request all wishlist from api");

      }
    })
  }


  // add product to cart
  addProduct(id:string):void{
    this.clickFlag=true;
    
        this._CartService.addProductToCart(id).subscribe({
          next:(response)=>{
            this.clickFlag=false;
            
            this.tost.success(response.message);
    
            // behavior subject
            this._CartService.cartNumber.next(response.numOfCartItems);
            localStorage.setItem('cartNumber',response.numOfCartItems)
    
          },
          error:(error:HttpErrorResponse)=>{
            this.clickFlag= false;
            this.tost.error(error.error.message);
          }
        });
    
      }

      // remove
      removeProduct(id:string|undefined):void{
        this._WishListService.remove(id).subscribe({
          next:(result)=>{
            console.log(result)
            
          this.allWishListData=result
          this.allWishList=result.data
        
        


        // const newProductData:any=this.allWishListData?.filter((item:any)=>this.allWishList?.includes(item._id))
        // this.allWishList=newProductData;


        this._WishListService.countNumber.next(  result.data.length);

          }
        })

      }

     
    
  

}

