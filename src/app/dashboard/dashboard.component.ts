import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  today: number = Date.now();

  // Variables de contrôle pour la pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;

  dernieresCommandes = [
    { table: '05', produits: 'Pizza Magherita, Coca', total: 14.50, date: '2023-10-07T12:30:00', etat: 'En attente' },
    { table: '12', produits: 'Burger King, Frites', total: 18.00, date: '2023-10-27T12:25:00', etat: 'Livré' },
    { table: '02', produits: 'Salade César', total: 10.50, date: '2023-10-17T12:15:00', etat: 'En attente' },
    { table: '08', produits: 'Pâtes Carbonara, Vin Rouge', total: 22.00, date: '2023-10-27T12:10:00', etat: 'Livré' },
    { table: '03', produits: 'Entrecôte, Purée', total: 25.50, date: '2023-10-29T12:05:00', etat: 'Livré' },
    { table: '01', produits: 'Sushi Mix (12pcs)', total: 19.00, date: '2023-10-20T11:55:00', etat: 'En attente' },
    { table: '07', produits: 'Tiramisu, Café', total: 8.50, date: '2023-10-18T11:50:00', etat: 'Livré' },
  ];


  searchTerm: string = '';

  get commandesFiltres(){
    const term = this.searchTerm.toLowerCase();

    if (!term) return this.dernieresCommandes;

    return this.dernieresCommandes.filter(commande =>
      commande.table.toLowerCase().includes(term) ||
      commande.produits.toLowerCase().includes(term) ||
      commande.total.toString().includes(term) ||
      commande.date.toLowerCase().includes(term) ||
      commande.etat.toLowerCase().includes(term)
    );

    console.log('Commandes filtrées :', this.commandesFiltres);

  }

  commandeSelectionnee: any = null;

  ouvrirDetail(commande: any) {
    this.commandeSelectionnee = commande;
    // On simule ici une liste de produits détaillée
    // Dans la vraie vie, ces données viendraient d'une base de données
    this.commandeSelectionnee.detailsProduits = [
      { nom: 'Pizza Margherita', quantite: 1, prixUnitaire: 10.50 },
      { nom: 'Coca-Cola', quantite: 2, prixUnitaire: 2.00 }
    ];
    console.log('Détails de la commande sélectionnée :', this.commandeSelectionnee);
  }

  get prixTotalGlobal() {
    return this.commandeSelectionnee?.detailsProduits?.reduce(
      (acc: number, p: any) => acc + (p.quantite * p.prixUnitaire), 0
    );
  }


  // Remise à la page 1 quand on tape une recherche ou change le nombre d'éléments
  onSearchOrPageSizeChange() {
    this.currentPage = 1;
  }

  // 1. Le Brouillon Paginé : extrait uniquement les 5 éléments de la page active
  get commandesPaginees() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.commandesFiltres.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // 2. Calcul du nombre total de pages nécessaires
  get totalPages(): number {
    return Math.ceil(this.commandesFiltres.length / this.itemsPerPage);
  }

  // 3. Fonction pour changer de page
  changerPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onItemsPerPageChange() {
    this.currentPage = 1; // On force le retour à la première page
  }

  voirTout() {
    this.currentPage = 1;
    this.itemsPerPage = this.commandesFiltres.length; // Affiche tous les éléments
  }
}
