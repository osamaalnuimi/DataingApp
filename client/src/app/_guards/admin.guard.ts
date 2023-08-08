import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/services/account.service';

export const AdminGuard: CanActivateFn = (route, state) => {
  const accountService = Inject(AccountService);
  const toastr = Inject(ToastrService);

  return accountService.currentUser$.pipe(
    map((user: User) => {
      if (!user) return false;
      if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
        return true;
      } else {
        toastr.error('You cannot enter this area');
        return false;
      }
    })
  );
};
