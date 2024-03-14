
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
let _route:any=inject(Router)
  if(localStorage.getItem("userToken")!=null){
    
    return true;

  }
  else{
    
    _route.navigate(["/login"]);
        return false;

  }
  
};
