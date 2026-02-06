import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../shared/models/login-request';
import { AuthResponse } from '../../shared/models/auth-response';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'https://localhost:44329/api/auth';

    constructor(private http: HttpClient) { }

    login(request: LoginRequest) {
        return this.http.post<AuthResponse>(
            `${this.apiUrl}/login`,
            request
        );
    }

    saveTokens(response: AuthResponse) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    logout() {
        localStorage.clear();
    }

    refresh() {
        return this.http.post<any>(
            `${this.apiUrl}/refresh`,
            {
                refreshToken: localStorage.getItem('refreshToken')
            }
        );
    }

    // ✅ Updated version
    getUserRoles(): string[] {

        const token = this.getAccessToken();
        if (!token) return [];

        const decoded: any = jwtDecode(token);

        const roles =
            decoded['role'] ||
            decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

        if (!roles) return [];

        // Handle both string and array cases
        return Array.isArray(roles) ? roles : [roles];
    }
}
