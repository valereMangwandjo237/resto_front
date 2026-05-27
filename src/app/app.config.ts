import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};


export const apiUrlProduit: string="http://localhost:8080:/produits"
export const apiUrlUser: string="http://localhost:8080:/user"
