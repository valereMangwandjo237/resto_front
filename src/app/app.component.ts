import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resto';
  isCollapsed = false;

  dernieresCommandes = [
    { table: '05', produits: 'Pizza Magherita, Coca', total: 14.50, date: '2023-10-27T12:30:00', etat: 'En attente' },
    { table: '12', produits: 'Burger King, Frites', total: 18.00, date: '2023-10-27T12:25:00', etat: 'Livré' },
    { table: '02', produits: 'Salade César', total: 10.50, date: '2023-10-27T12:15:00', etat: 'En attente' },
    { table: '08', produits: 'Pâtes Carbonara, Vin Rouge', total: 22.00, date: '2023-10-27T12:10:00', etat: 'Livré' },
    { table: '03', produits: 'Entrecôte, Purée', total: 25.50, date: '2023-10-27T12:05:00', etat: 'Livré' },
    { table: '01', produits: 'Sushi Mix (12pcs)', total: 19.00, date: '2023-10-27T11:55:00', etat: 'En attente' },
    { table: '07', produits: 'Tiramisu, Café', total: 8.50, date: '2023-10-27T11:50:00', etat: 'Livré' },
  ];

  get nbEnAttente(): number {
    const total = this.dernieresCommandes.filter(c => c.etat === 'En attente').length;
    return total

  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
