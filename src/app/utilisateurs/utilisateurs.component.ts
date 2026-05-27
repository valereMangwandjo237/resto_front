import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  listeUser = [
    { id: 1, avatar: "JD", nom: 'Jean Dupont', email: "test@gmail.com", adresse: 'Cradat, Ngoaekele', numero: '0612345678', role: 'Gérant'},
    { id: 2, avatar: "SM", nom: 'Sophie Martin', email: "vmangwandjo@gmail.com", adresse: 'Rue Damas, Yaounde', numero: '0698765432', role: 'Serveur'},
    { id: 3, avatar: "MK", nom: 'Marc Kassov', email: "valeremabom@gmail.com", adresse: 'Etoudi, Yaounde', numero: '0711223344', role: 'Gérant'},
  ];

  modeEdition: boolean = false;
  userSelectionne: any = {nom: '', email: '', adresse: '', numero: '', role: ''};

  // La liste qui sera manipulée par la recherche
  usersFiltres = [...this.listeUser];

  searchTerm: string = '';

  filtrerUsers() {
    const term = this.searchTerm.toLowerCase();

    this.usersFiltres = this.listeUser.filter(user =>
      user.nom.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.adresse.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term) ||
      user.numero.toLowerCase().includes(term)
    );
  }
  Ajouter() {
    this.modeEdition = false;
    this.userSelectionne = {nom: '', email: '', adresse: '', numero: '', role: ''};
    console.log("Le gérant veut ajouter un nouvel utilisateur", this.modeEdition);
  }

  Editer(user: any) {
    this.modeEdition = true;
    this.userSelectionne = { ...user };
    console.log("Le gérant veut éditer l'utilisateur :", user);
  }

  confirmerSuppression(user: any){
    const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary').trim() || '#d4af37';

    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: `Vous allez supprimer l'utilisateur : ${user.nom}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colorPrimary, // Ton doré
      cancelButtonColor: '#343a40',  // Ton gris sombre
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Ton code pour supprimer le produit de la liste
        //this.supprimerProduit(produit.id);
        // Notification de succès

      }
    });

  }
}
