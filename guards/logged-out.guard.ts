import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/Rx';

@Injectable()
export class LoggedOutGuard implements CanActivate {
    constructor(private auth: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map((auth) => {
            return auth == null;
        }).first();
    }
}
