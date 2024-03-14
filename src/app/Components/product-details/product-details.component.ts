import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from 'src/app/core/services/details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/core/interfaces/details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
clickFlag:boolean=false;
detailsData?:Details;
  constructor(private _DetailsService: DetailsService, private _ActivatedRoute: ActivatedRoute,private _CartService:CartService,private _toast: ToastrService ) { }
  id?: string | null;
  // Init function
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {

        this.id = param.get("id")


      }
    });

    this._DetailsService.getDetails(this.id).subscribe({
      next: (response) => {
       
       
        this.detailsData=response.data;
      },
      error: (error) => {
        console.log("Error when getting details");
      }
    });

   
  }

  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:4000,
  
    items:1
   
  }
  // add product to cart
  addProduct(id:string):void{

this.clickFlag = true;
    this._CartService.addProductToCart(id).subscribe({
      next:(response)=>{
        this.clickFlag=false;
        
        this._CartService.cartNumber.next(response.numOfCartItems);
      //  false
        this._toast.success(response.message);

      },
      error:(error:HttpErrorResponse)=>{
        this.clickFlag=false;
        
        this._toast.error(error.error.message);
      }
    });

  }




}
