import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { categoryList } from 'src/app/core/interfaces/categories';
import { ProductList } from 'src/app/core/interfaces/product';
import { WishList } from 'src/app/core/interfaces/wish-list';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { CatgoriesService } from 'src/app/core/services/catgories.service';
import { DetailsService } from 'src/app/core/services/details.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { WishListService } from 'src/app/core/services/wish-list.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickFlag:boolean=false;
  searchText:string='';
  responseAllProduct?:ProductList[];
  responseAllCategory?:categoryList[];
flagEmpty:boolean=true;
flagFull:boolean=false;
  responseAllWishList?:WishList;
  responseAllWishListData?:string[];

  constructor(private _ProductsService:ProductsService,private _CatgoriesService:CatgoriesService,private _DetailsService:DetailsService,private _CartService:CartService,private tost: ToastrService,private _WishListService:WishListService){}
  // init
  ngOnInit(): void {
    // get all products from api
    this._ProductsService.getAllProduct().subscribe({
      next:(response)=>{
        
        this.responseAllProduct=response.data
      
        
     
        
      },
      error:(error:HttpErrorResponse)=>{
        console.log("when get all product found problem")
      }
    });

    // get all categories from api
    this._CatgoriesService.getAllCategories().subscribe({
      next:(response)=>{
        this.responseAllCategory=response.data
        
     
        
      },
      error:(error:HttpErrorResponse)=>{
        console.log("when get all categories found problem")
      }
    });
    this._WishListService.getAllWishList().subscribe({
      next:(response)=>{
        console.log(response)
     this.responseAllWishListData=   response.data.map((item:any)=>{
          return item.id
        });
      
        
        this._WishListService.countNumber.next(response.count);
      }
    })
    
  }

  // slider dynamic
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:4000,
  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
   
  }
  // slider static
  staticOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:4000,
 
    items:1,
    nav: false
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

  // add to wishList
  addToWishList(id:string):void{ 

    this._WishListService.addToWish(id).subscribe({
      next:(response)=>{
        console.log(response);
     this._WishListService.countNumber.next(response.data.length);
        this.responseAllWishList=response;
        this.responseAllWishListData=this.responseAllWishList?.data
        
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
            this.responseAllWishListData=this.responseAllWishList?.data
             
            this._WishListService.countNumber.next(response.data.length)

          }
        })

      }

      // all(id:string,event:any):void{
      //   if(event.target.id==id){
          
         
      //     if(this.flagEmpty){
      //       this.addToWishList(id);
      //       this.flagEmpty=false;
      //       this.flagFull=true;
    
            
    
      //     }
      //     else{
      //       this.removeProduct(id);
      //       this.flagEmpty=true;
      //       this.flagFull=false;
      //     }

      //   }else{
      //     this.flagEmpty=true;
      //     this.flagFull=false;
      //   }
      
      // }

}

