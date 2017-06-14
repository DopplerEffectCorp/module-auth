import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/Rx';

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor(private auth: AuthService, private afAuth: AngularFireAuth, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.afAuth.authState.switchMap((auth) => {
            return this.auth.haveRole(auth.uid, 'admin');
        }).map((gotRole) => {
            console.log('gotRile', gotRole)
            if (!gotRole) {
                this.router.navigate(['/unauthorized']);
            }
            return gotRole;
        });
    }
}
