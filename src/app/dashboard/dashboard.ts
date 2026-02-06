import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from '../core/directives/has-role';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent { }
