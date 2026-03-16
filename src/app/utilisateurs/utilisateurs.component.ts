import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchFilterComponent } from '../search-filter/search-filter.component';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [
    CommonModule,
    SearchFilterComponent
  ],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  filtrerUtilisateurs(valeur: string) {
    console.log("Le gérant recherche l'utilisateur :", valeur);
  }
}
