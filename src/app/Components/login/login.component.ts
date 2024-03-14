import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading:boolean = false;

  constructor(private _AuthService: AuthService,private toastr: ToastrService,private _Router:Router) { }


  loginForm: FormGroup = new FormGroup(
    {
      
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,13}$/)]),
     
    });

  
  // method for register user

  handleFormLogin():void {
    this.isLoading=true;
    const valueUserData=this.loginForm.value;
    if(this.loginForm.valid){ 
      this._AuthService.loginUser(valueUserData).subscribe({
        next: (response) => {
          if(response.message=="success"){
            this.isLoading=false;
            this.toastr.success("Welcome"+" " + response.user.name+" "+"To E_commerce Application ");
            localStorage.setItem("userToken",response.token);
            // decode token user 
           this._AuthService.decodeToken();
            this._Router.navigate(["/home"]);
          }
  
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading=false;
         
          this.toastr.error(error.error.message);
  
        }
      });
    }
    
    

  }

  // forgetPassword
  

}
