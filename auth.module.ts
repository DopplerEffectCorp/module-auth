import {
    ModuleWithProviders,
    NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './services/auth.service';
import {AdminRoleGuard} from './guards/admin-role.guard';
import {LoggedInGuard} from './guards/logged-in.guard';
import {LoggedOutGuard} from './guards/logged-out.guard';

@NgModule({
    imports: [CommonModule],
    declarations: [
    ],
    exports: []
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [AuthService, AdminRoleGuard, LoggedInGuard, LoggedOutGuard]
        }
    }
}