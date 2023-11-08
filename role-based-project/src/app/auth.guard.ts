import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("user")== null && localStorage.getItem("password")== null){
    return false
  }else{
  return true;
  }
};
