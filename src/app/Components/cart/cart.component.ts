import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AllCart } from 'src/app/core/interfaces/all-cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allDataFromCart?:AllCart|null;

  constructor(private _cartServices:CartService){}
  ngOnInit(): void {
    // get all cart fro user
    this.allCart();
    
    
  }

  // all cart 
  allCart(){
    this._cartServices.getAllProductFromCart().subscribe({
      next:(result) => {
        
        this.allDataFromCart = result;
        this._cartServices.cartNumber.next(result.numOfCartItems)
        localStorage.setItem('cartNumber',result.numOfCartItems)

      },
      error: (err:HttpErrorResponse) => {
        console.log("Error getting all cart from user")
      }

    })

  }

  // delete product
  delProductFromCart(id:string):void{
    this._cartServices.deleteProductFromCart(id).subscribe({
      next:(result) => {
       
        this.allDataFromCart = result;
        this._cartServices.cartNumber.next(result.numOfCartItems)
        localStorage.setItem('cartNumber',result.numOfCartItems)
      
      },
      error: (err:HttpErrorResponse)=>{
        console.log("Error deleting product from cart");
      }
      
    })
  }
  // minus count
  minusCount(count:number,id:string ):void{ 
    if(count>=1){
      this._cartServices.updateCountCart(count,id).subscribe({
        next: (result) => {
          this.allDataFromCart = result;
  
        },
        error: (err:HttpErrorResponse)=>{
          console.log("Error update count from cart");
        }
  
      });
    
  

    }
    else{
     this.delProductFromCart(id);

      
      

    }
   
    
    
  }

 
// add count
  addCount(count:number,id:string):void{
    this._cartServices.updateCountCart(count,id).subscribe({
      next: (result) => {
        this.allDataFromCart = result;

      },
      error: (err:HttpErrorResponse)=>{
        console.log("Error update count from cart");
      }

    });



  }

   // remove all cart
allRemove(){
  this._cartServices.clearCart().subscribe({
    next: (result) => {
      if(result.message==="success"){
        this.allDataFromCart=null
        this._cartServices.cartNumber.next(0)
        console.log(result);

      }
   
      
      

    }
    ,
    error: (err:HttpErrorResponse)=>{
   

      console.log("Error when clearing cart");

    }
  })
}
 



}
