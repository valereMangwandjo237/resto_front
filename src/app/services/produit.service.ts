import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrlProduit } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  listeProduits() {
    return this.http.get(apiUrlProduit);
  }

  getProduitById(id: number) {
    return this.http.get(`${apiUrlProduit}/${id}`);
  }

  deleteProduit(id: number) {
    return this.http.delete(`${apiUrlProduit}/${id}`);
  }

  editProduit(produit: any) {
    return this.http.put(`${apiUrlProduit}/${produit.id}`, produit);
  }

  addProduit(produit: any) {
    return this.http.post(apiUrlProduit, produit);
  }
}
