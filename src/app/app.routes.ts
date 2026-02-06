import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { DashboardComponent } from './dashboard/dashboard';
import { roleGuard } from './core/guards/role-guard';
import { AdminComponent } from './admin/admin';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [roleGuard],
        data: { role: 'Admin' }
    }

];
