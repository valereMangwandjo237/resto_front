import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  listeCat = [
    { id: 1, nom: 'Entrées', nombre: 12, icon:"fas fa-utensils"},
    { id: 2, nom: 'Plats', nombre: 25, icon:"fas fa-utensil-spoon"},
    { id: 3, nom: 'Desserts', nombre: 10, icon:"fas fa-ice-cream"},
    { id: 4, nom: 'Boissons', nombre: 15, icon:"fas fa-glass-martini"},
  ];

  modeEdition: boolean = false;
  catSelectionne: any = {nom: '', nombre: 0, icon: ''};

  Ajouter() {
    this.modeEdition = false;
    this.catSelectionne = {nom: '', nombre: 0, icon: ''};
    console.log("Le gérant veut ajouter une nouvelle catégorie", this.catSelectionne);
  }
  Editer(cat: any) {
    this.modeEdition = true;
    this.catSelectionne = { ...cat };
    console.log("Le gérant veut éditer la catégorie :", this.catSelectionne);
  }

  confirmerSuppression(cat: any){
    const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary').trim() || '#d4af37';

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Vous allez supprimer la catégorie : ${cat.nom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colorPrimary, // Ton doré
      cancelButtonColor: '#343a40',  // Ton gris sombre
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Ton code pour supprimer la catégorie de la liste
        //this.supprimerCat(cat.id);
        // Notification de succès

      }
    });

  }
}
