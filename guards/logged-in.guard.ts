import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/Rx';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private afAuth: AngularFireAuth) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map((auth) => {
            if (!auth) {
                this.router.navigate(['/login']);
            }
            return auth != null;
        }).first();
    }
}
