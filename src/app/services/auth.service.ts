// services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  signup(data: any) {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  resetPassword(email: string) {
    return this.http.post(`${this.apiUrl}/reset-password`, { email });
  }
}
