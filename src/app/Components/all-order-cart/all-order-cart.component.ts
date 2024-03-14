
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersService } from 'src/app/core/services/all-orders.service';
import { AllOrders, AllOrdersList, CartItem } from 'src/app/core/interfaces/all-orders';
import { Metadata } from 'src/app/core/interfaces/categories';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-order-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-order-cart.component.html',
  styleUrls: ['./all-order-cart.component.scss']
})
export class AllOrderCartComponent {
  constructor(private _AllOrdersService:AllOrdersService,private ActivatedRoute:ActivatedRoute){}
  allOrders?:AllOrders;
  index:any=0;
  allOrdersList?:AllOrdersList[];
  allCartItemList?:CartItem[];
  allOrdersMetaData?:Metadata;
  resultOrders?:number;
  ngOnInit(): void {
    this._AllOrdersService.allOrders().subscribe({
      next:(response)=>{
        this.ActivatedRoute.paramMap.subscribe({
          next:(response)=>{
            console.log(response)
           this.index= response.get("index");
          }
        })
        this.allOrders=response;
        this.allOrdersList=this.allOrders?.data;
        this.allOrdersMetaData=this.allOrders?.metadata;
        this.resultOrders=this.allOrders?.results;
        this.allCartItemList=this.allOrders?.data[this.index].cartItems;
        console.log(this.allCartItemList);
       


      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error occurred during request all orders ")

      }
    })
  }


}
