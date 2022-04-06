import { Auteur } from "./Auteur";
import { Oeuvre } from "./Oeuvre";

export class Sculpture extends Oeuvre {

    private matiere: string;

    constructor(titre : string, annee : number, auteurs : Auteur[], matiere: string) {
        
        super( titre, annee, auteurs );

        this.matiere = matiere;
    }

    public afficher(): string {

        // Variable qui contiendra la liste des auteurs sous forme de string
        let stringAuteurs : string;

        // Parcours du tableau des auteurs
        if( this.auteurs!=undefined ){

            // Initialise la string a vide
            stringAuteurs = "";

            this.auteurs.forEach((auteur) => stringAuteurs += ( stringAuteurs == "" ?"" :", " ) + auteur.afficher() );
        }
        // Renvoi final
        return `[
            titre : ${this.titre}, 
            annee : ${this.annee}, 
            auteurs : [${stringAuteurs}], 
            matiere : ${this.matiere}` +
            ( this.meilleureEnchere != undefined ?`, meilleure enchère : ${this.meilleureEnchere}` :"" ) +
            ( this.acheteur != undefined ?`, acheteur : ${this.acheteur.getNom(), this.acheteur.getPrenom()}` :"") +
            "]";
    }
}