import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {

  const authService = inject(AuthService);
  const roles = authService.getUserRoles();

  const requiredRole = route.data?.['role'];

  if (!requiredRole) return true;

  return roles.includes(requiredRole);
};
