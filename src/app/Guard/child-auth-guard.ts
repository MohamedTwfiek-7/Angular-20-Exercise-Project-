import { CanActivateChildFn } from "@angular/router";

export const childAuthGuard: CanActivateChildFn = (route, state) => {

  return true;
};
