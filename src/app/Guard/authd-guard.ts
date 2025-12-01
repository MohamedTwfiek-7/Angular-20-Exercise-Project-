import { CanDeactivateFn } from '@angular/router';
import { Customer } from '../common/customer/customer';

export const authdGuard: CanDeactivateFn<Customer> = (component, currentRoute, currentState, nextState) => {

  return component.canNavigate();
};
