import { Categorie } from "./categorie"
import { Image } from "./image"


export class Produit {
  idProduit!: number
  idEtablissement!: number
  image!: Image
  nom!: string
  description!: string
  prix!: number
  categorie!: Categorie
}
