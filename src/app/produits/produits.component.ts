import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  // Ta liste de produits (exemple)
  listeProduits = [
    { id: 1, nom: 'Pizza Margherita', categorie: 'Plats', prix: 1200, description: 'Tomate, mozzarella bio, basilic frais et huile d’olive.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100' },
    { id: 2, nom: 'Donut Chocolat', categorie: 'Desserts', prix: 3500, description: 'Glaçage chocolat noir et pépites...', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100' },
  ];

  produitSelectionne: any = { nom: '', prix: 0, categorie: '', description: '', image: '' };
  modeEdition: boolean = false;

  Ajouter(){
    console.log("Ajout")
    this.modeEdition = false
    this.produitSelectionne =  { nom: '', prix: null, categorie: '', description: '', image: '' };
  }

  Editer(produit: any){
    console.log("Edit..." + this.produitSelectionne)
    this.modeEdition = true
    this.produitSelectionne = { ...produit }
  }

  confirmerSuppression(produit: any){
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Vous allez supprimer le produit : ${produit.nom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d4af37', // Ton doré
      cancelButtonColor: '#343a40',  // Ton gris sombre
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Ton code pour supprimer le produit de la liste
        this.supprimerProduit(produit.id);
        // Notification de succès
        Swal.fire(
          'Supprimé !',
          'Le produit a été retiré de la carte.',
          'success'
        );
      }
    });

  }

  supprimerProduit(id: number){
    console.log("Le produit " + id + " supprimé....")
  }

  voirDetails(produit: any){
    this.produitSelectionne = produit
    console.log("produits selectionné: " + this.produitSelectionne.id)
  }

}
