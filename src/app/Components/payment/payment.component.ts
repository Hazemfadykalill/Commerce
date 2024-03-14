import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements OnInit {
id?:string|null;
  constructor(private _ActivatedRoute:ActivatedRoute,private _PaymentService:PaymentService){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
     this.id=params.get("id");
      }
    })

    
  }
// forms
paymentForm:FormGroup=new FormGroup({
  details:new FormControl(""),
  phone:new FormControl(""),
  city:new FormControl(""),


});
handelFormPayment(){
  if(this.paymentForm.valid){
    this._PaymentService.paymentOnline(this.id,this.paymentForm.value).subscribe({
      next:(response)=>{
        if(response.status=="success"){
          window.open(response.session.url,"_blank");
          

        }
       
        
      },
      error:(error:HttpErrorResponse)=>{
        console.log("error occurred during payment processing");
      }
  
    });

  }
  else{
    console.log("error occurred during entering data to input tag");


  }
  


}



  }
 
  



