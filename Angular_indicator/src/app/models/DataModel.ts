export class DataModel {
  n_bsc: number;
  circuit: string;
  date_disponibilite: Date;
  utilisateur: string;
  debut_traitement: Date;
  date_pre_ciblage?: Date;
  utilisateur_pre_ciblage?: string;
  debut_traitement_pre_cible?: Date;
  debut_traitement_reel: Date;
  fin_traitement: Date;
  scap: boolean;
  constructor($n_bsc: number, $circuit: string, $date_disponibilite: Date, $utilisateur: string, $debut_traitement: Date, $date_pre_ciblage: Date, $utilisateur_pre_ciblage: string, $debut_traitement_pre_cible: Date, $debut_traitement_reel: Date, $fin_traitement: Date, $scap: boolean) {
    this.n_bsc = $n_bsc;
    this.circuit = $circuit;
    this.date_disponibilite = $date_disponibilite;
    this.utilisateur = $utilisateur;
    this.debut_traitement = $debut_traitement;
    this.date_pre_ciblage = $date_pre_ciblage;
    this.utilisateur_pre_ciblage = $utilisateur_pre_ciblage;
    this.debut_traitement_pre_cible = $debut_traitement_pre_cible;
    this.debut_traitement_reel = $debut_traitement_reel;
    this.fin_traitement = $fin_traitement;
    this.scap = $scap;
  }

}
