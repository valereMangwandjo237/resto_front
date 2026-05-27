import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Données du formulaire
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Tentative de connexion:', this.username);

    // Pour l'instant, on simule une connexion réussie
    // Plus tard, tu appelleras ton API Spring Boot ici
    if (this.username === 'valere' && this.password === 'sokcellerie') {
      this.authService.login({ username: this.username }); // Appelle ton service
      this.router.navigate(['/dashboard']); // Redirige
    } else {
      alert('Identifiants invalides (essaie valere/sokcellerie)');
    }
  }

}
