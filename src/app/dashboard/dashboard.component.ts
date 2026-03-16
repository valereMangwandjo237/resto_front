import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  today: number = Date.now();

  dernieresCommandes = [
    { table: '05', produits: 'Pizza Magherita, Coca', total: 14.50, date: '2023-10-27T12:30:00', etat: 'En attente' },
    { table: '12', produits: 'Burger King, Frites', total: 18.00, date: '2023-10-27T12:25:00', etat: 'Livré' },
    { table: '02', produits: 'Salade César', total: 10.50, date: '2023-10-27T12:15:00', etat: 'En attente' },
    { table: '08', produits: 'Pâtes Carbonara, Vin Rouge', total: 22.00, date: '2023-10-27T12:10:00', etat: 'Livré' },
    { table: '03', produits: 'Entrecôte, Purée', total: 25.50, date: '2023-10-27T12:05:00', etat: 'Livré' },
    { table: '01', produits: 'Sushi Mix (12pcs)', total: 19.00, date: '2023-10-27T11:55:00', etat: 'En attente' },
    { table: '07', produits: 'Tiramisu, Café', total: 8.50, date: '2023-10-27T11:50:00', etat: 'Livré' },
  ];

  commandeSelectionnee: any = null;

  ouvrirDetail(commande: any) {
    this.commandeSelectionnee = commande;
    // On simule ici une liste de produits détaillée
    // Dans la vraie vie, ces données viendraient d'une base de données
    this.commandeSelectionnee.detailsProduits = [
      { nom: 'Pizza Margherita', quantite: 1, prixUnitaire: 10.50 },
      { nom: 'Coca-Cola', quantite: 2, prixUnitaire: 2.00 }
    ];
  }

  get prixTotalGlobal() {
    return this.commandeSelectionnee?.detailsProduits?.reduce(
      (acc: number, p: any) => acc + (p.quantite * p.prixUnitaire), 0
    );
  }
}
