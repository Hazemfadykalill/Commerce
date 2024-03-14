import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/core/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ]
});

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})
export class RegisterComponent {
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService,private toastr: ToastrService,private _Router:Router) { }


  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
      rePassword: new FormControl(""),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    },

    // array because possible values validators
    { validators: [this.confirmRePassword] } as FormControlOptions);

  confirmRePassword(group: FormControl) {
    let pass = group.get("password");
    let rePass = group.get("rePassword");
    if (pass?.value != rePass?.value) {
      rePass?.setErrors({ mismatch: true });
    }
    else if (rePass?.value == "") {
      rePass.setErrors({ required: true });
    }

  }
  // method for register user

  handleFormRegister() {
    this.isLoading=true;
    if(this.registerForm.valid){ 
      this._AuthService.registerUser(this.registerForm.value).subscribe({
        next: (response) => {
          if(response.message=="success"){
            this.isLoading=false;
            this.toastr.success("Welcome"+" " + response.user.name+" "+"To Login! Page ");

            this._Router.navigate(["/login"]);
            


          }
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading=false;
          
          this.toastr.error(error.error.message);
  
        }
      });
    }
    
    

  }
}
