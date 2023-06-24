import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);
  return accountService.currentUser$.pipe(
    map((user) => {
      if (user) return true;
      else {
        toastr.error('You shall not pass!');
        return false;
      }
    })
  );
};
