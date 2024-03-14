
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersService } from 'src/app/core/services/all-orders.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AllOrders, AllOrdersList } from 'src/app/core/interfaces/all-orders';
import { Metadata } from 'src/app/core/interfaces/categories';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private _AllOrdersService:AllOrdersService){}

  allOrders?:AllOrders;
  allOrdersList?:AllOrdersList[];
  allOrdersMetaData?:Metadata;
  resultOrders?:number;
  ngOnInit(): void {
    this._AllOrdersService.allOrders().subscribe({
      next:(response)=>{
        this.allOrders=response;
        this.allOrdersList=this.allOrders?.data;
        this.allOrdersMetaData=this.allOrders?.metadata;
        this.resultOrders=this.allOrders?.results;
       


      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error occurred during request all orders ")

      }
    })
  }



}
