import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HandlePasswordService } from 'src/app/core/services/handle-password.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  email:string="";
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;

  constructor(private _handlePassword:HandlePasswordService,private _Router:Router){}
// forgetPassword
  forgetPassword:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.email,Validators.required]),

  });

  forgetPasswordOld():void{
    if(this.forgetPassword.valid){
      this.email=this.forgetPassword.value.email;
      console.log(this.forgetPassword.value);
    
      // api
      this._handlePassword.forget(this.forgetPassword.value).subscribe({
        next:(result)=>{
          if(result.statusMsg=="success"){
            this.step2=true;
            this.step1=false;


          }
          
        },
        error:(error:HttpErrorResponse)=>{
          console.log("Error occurred during password retrieval")
        }
  
      })
  

    }
   


  }

  // resetCode
  ResetCode:FormGroup=new FormGroup({
    resetCode:new FormControl("",[Validators.required]),

  });

  resetCodePassword():void{
    // api
    if(this.ResetCode.valid){
      
      console.log(this.ResetCode.value);
    
      // api
      this._handlePassword.reset(this.ResetCode.value).subscribe({
        next:(result)=>{
          if(result.status=="Success"){
            this.step3=true;
            this.step2=false;
            this.step1=false;



          }
          console.log(result);
        },
        error:(error:HttpErrorResponse)=>{
          console.log("Error occurred during reset code retrieval")
        }
  
      })
  

    }
   

  }

    // create New Password
    NewPassword:FormGroup=new FormGroup({
      newPassword:new FormControl("",[Validators.required]),
  
    });
  
    newPasswordReset():void{
      let reset=this.NewPassword.value;
      reset.email=this.email;
      // api

      if(this.NewPassword.valid){
      
        console.log(reset);
      
        // api
        this._handlePassword.resetPassword(reset).subscribe({
          next:(response)=>{
            console.log(response);
            localStorage.setItem("userToken",response.token);
            this._Router.navigate(["/home"]);

          },
          error:(error:HttpErrorResponse)=>{
            console.log("Error occurred during reset code retrieval")
          }
    
        })
    
  
      }
  
    }

}
