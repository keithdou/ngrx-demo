import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { selectForm } from './store/form.selectors';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const protectedUrls = ['/page1', '/page2', '/page3', '/review', '/confirm'];
    if (protectedUrls.includes(state.url)) {
        this.store.select(selectForm).subscribe((form) => {
            if (form.applicantId === '') {
                this.router.navigate(['']);
                return false;
            }
        });
    }

    return true;
  }
}
