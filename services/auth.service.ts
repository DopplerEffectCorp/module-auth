import {
    EventEmitter,
    Injectable,
} from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {User} from 'firebase/app';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    user: User;
    authChanged: EventEmitter<any> = new EventEmitter();

    constructor(private afDb: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.authState.subscribe((user) => {
            this.user = user;
            this.authChanged.emit(user);
        });
    }

    get() {
        return this.user;
    }

    watchAuthState(callback) {
        this.afAuth.authState.subscribe((user) => {
            callback(user);
        });
    }

    signUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    haveRole(uid, role) {
        return this.afDb.list(`/users/roles/${uid}`).map((array) => {
            let found = false;
            array.map((elem) => {
                if (elem.$value === role) {
                    found = true;
                }
            });
            return found;
        }).first();
    }

    isLoggedIn(): boolean {
        return this.user != null;
    }

    goHome() {
        return this.router.navigate(['/']);
    }

    login(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.afAuth.auth.signOut().then(() => {
            return this.router.navigate(['/login']);
        });
    }

    resetPassword(email){
     return firebase.auth().sendPasswordResetEmail(email);
    }
}
