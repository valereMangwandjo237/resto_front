import { Image } from "./image"

export class Etablissement {
  idEtablissement!: number
  logo!: Image
  nom!: string
  type!: string
  adresse!: string
  telephone!: string
  email!: string
  site_web!: string
  description!: string
  date_enregistrement!: Date
  status!: string
}
