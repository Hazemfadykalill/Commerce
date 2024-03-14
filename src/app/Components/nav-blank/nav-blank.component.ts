import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
// @ViewChild("navBlank")navBarHome!:ElementRef; // add Event
//   @HostListener('window:scroll')
//   onScroll(){
//     if(scrollY>100){
//       this._Renderer2.addClass(this.navBarHome.nativeElement,"px-3");
//     }
//   }
  cartNumber: number = 0;
  countNumber: number = 0;
  constructor(private _router: Router, private _CartService: CartService,private _Renderer2:Renderer2,private _wishList:WishListService) {

  }
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartNumber = data;
      }
    });
    this._CartService.getAllProductFromCart().subscribe({
      next:(result) => {
        
       
        this._CartService.cartNumber.next(result.numOfCartItems)
        

      },
      error: (err:HttpErrorResponse) => {
        console.log("Error getting all cart from user")
      }

    })

this._wishList.countNumber.subscribe({
  next: (data) => {
    this.countNumber=data;
  }
});
this._wishList.getAllWishList().subscribe({
  next: (data) => {
    this._wishList.countNumber.next(data.count);
  }
});

  }


  

  // method signOut  and navigate to login screen
  signOut() {
    localStorage.removeItem("userToken");
    this._router.navigate(['/login']);



  }


}
