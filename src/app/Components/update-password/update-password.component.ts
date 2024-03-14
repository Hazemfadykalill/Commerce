import { UpdatePasswordService } from './../../core/services/update-password.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  isLoading: boolean = false;
  constructor(private _UpdatePasswordService: UpdatePasswordService, private toast: ToastrService,private _router:Router) { }

  updatePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl("", [Validators.required,]),
    password: new FormControl("", [Validators.required,]),
    rePassword: new FormControl(""),


  }, { validators: [this.rePasswordConfirm] } as FormControlOptions)

  rePasswordConfirm(group?: FormControl) {
    let pass = group?.get("password");
    let repass = group?.get("rePassword");
    if (pass?.value != repass?.value) {
      repass?.setErrors({ mismatch: true })
    }
    else if (repass?.value == "") {
      repass.setErrors({ required: true });
    }


  }




  handleFormUpdate() {
    this.isLoading = true;
    if (this.updatePasswordForm.valid) {
      this._UpdatePasswordService.updatePassword(this.updatePasswordForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if(response.message=="success"){
            localStorage.setItem("userToken",response.token);
            this.updatePasswordForm.reset();
            this._router.navigate(['/home']);
          }

        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;

          this.toast.error(error.error.message);

        }
      });
    }

  }

}



// {
//     "currentPassword":"123456",
//     "password":"pass1234",
//     "rePassword":"pass1234"
// }