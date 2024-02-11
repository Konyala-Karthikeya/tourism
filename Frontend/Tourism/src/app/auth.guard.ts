import { CanActivateFn } from '@angular/router';
import { CustomerService } from './customer.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  let service = inject(CustomerService);
  return service.getIsUserLoggedIn();
};
