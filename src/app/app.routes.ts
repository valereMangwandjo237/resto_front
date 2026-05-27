import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { TablesComponent } from './tables/tables.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

  // 1. ROUTE INDÉPENDANTE : Pas de navbar ici !
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // 2. ROUTES AVEC NAVBAR : Toutes les pages à l'intérieur de MainLayout
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'utilisateurs', component: UtilisateursComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'produits', component: ProduitsComponent },
    ]
  },


];
