import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { TablesComponent } from './tables/tables.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'produits', component: ProduitsComponent }
];
