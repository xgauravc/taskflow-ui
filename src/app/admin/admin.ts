import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html'
})
export class AdminComponent {

  adminMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://localhost:44329/api/admin/dashboard')
      .subscribe(res => {
        this.adminMessage = res.message;
      });
  }
}
