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
export class LoggedOutGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map((auth) => {
            if (auth) {
                this.router.navigate(route.parent.url);
            }
            return auth == null;
        }).first();
    }
}
