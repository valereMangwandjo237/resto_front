import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;

  login(credentials: any) {
    // Ici, tu appelleras ton API Spring Boot
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
