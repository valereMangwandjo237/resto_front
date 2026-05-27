import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  // Liste brute de tes tables (Source de vérité)
  listeTables = [
    {
      id: 1,
      nom: 'Table 1 (2 pers.)',
      statut: 'ouvert',
      service: null // Libre = pas de service
    },
    {
      id: 2,
      nom: 'Table 2 (4 pers.)',
      statut: 'fermé',
      service: {
        serveur: 'Jean Dupont',
        dateOuverture: '2026-05-27 12:15',
        dateFermeture: null // En cours
      }
    },
    {
      id: 3,
      nom: 'Table 3 (2 pers.)',
      statut: 'ouvert',
      service: null
    },
    {
      id: 4,
      nom: 'Terrasse 2',
      statut: 'fermé',
      service: {
        serveur: 'Sarah Benz',
        dateOuverture: '2026-05-27 11:30',
        dateFermeture: '2026-05-27 13:00'
      }
    },
    {
      id: 5,
      nom: 'Terrasse 6',
      statut: 'fermé',
      service: {
        serveur: 'Sarah Benz',
        dateOuverture: '2026-05-27 11:30',
        dateFermeture: '2026-05-27 13:00'
      }
    },
    {
      id: 6,
      nom: 'Terrasse 9',
      statut: 'fermé',
      service: {
        serveur: 'Sarah Benz',
        dateOuverture: '2026-05-27 11:30',
        dateFermeture: '2026-05-27 13:00'
      }
    }
  ];

  // Stocke l'ID de la table dont on regarde les détails
  tableSelectionneeId: number | null = null;

  // Pour filtrer par statut via des boutons (Optionnel mais très pratique !)
  filtreStatut: string = 'tous';

  // Getter intelligent pour filtrer les tables à l'écran
  get tablesVisibles() {
    if (this.filtreStatut === 'tous') return this.listeTables;
    return this.listeTables.filter(table => table.statut === this.filtreStatut);
  }

  basculerDetails(tableId: number) {
    if (this.tableSelectionneeId === tableId) {
      this.tableSelectionneeId = null; // Ferme si déjà ouvert
    } else {
      this.tableSelectionneeId = tableId; // Ouvre les détails de cette table
    }

    console.log('Table sélectionnée ID:', tableId);
  }

  basculerStatut(table: any) {
    if (table.statut === 'ouvert') {
      table.statut = 'fermé';
      table.service = {
        serveur: 'Serveur Actuel', // Simulé
        dateOuverture: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        dateFermeture: null
      };
    } else {
      table.statut = 'ouvert';
      table.service = null;
      if (this.tableSelectionneeId === table.id) this.tableSelectionneeId = null;
    }
  }
}
