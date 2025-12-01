import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  let auth = inject(Auth);

  // let sub = route.url[0].path;
  // console.log(sub);

  // if (sub === 'about') {
  //   alert('You Don\'t Have Access to Customer Page');
  //   router.navigate(['']);
  //   return false;
  // }
  // return true;

  if (auth.isLoggedIn()) {
    return true;
  } else {
    alert('You Must Be Logged In to Access This Page');
    router.navigate(['/login']);
    return false;
  }
};
