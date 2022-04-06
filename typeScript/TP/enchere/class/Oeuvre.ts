import { Affichable } from "../interface/Affichable";
import { Vendable } from "../interface/Vendable";

import { Acheteur } from "./Acheteur";
import { Auteur } from "./Auteur";

export class Oeuvre implements Affichable, Vendable {

    protected titre: string;
    protected annee: number;

    protected auteurs: Auteur[];

    // Attributs exigés par Vendable
    meilleureEnchere : number;
    acheteur?: Acheteur;


    constructor( titre: string, annee: number, auteurs: Auteur[] ) {

        this.titre = titre;
        this.annee = annee;
        this.auteurs = auteurs;
    }
    
    // Implémente Affichable
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
            auteurs : [${stringAuteurs}]` +
            ( this.meilleureEnchere != undefined ?`, meilleure enchère : ${this.meilleureEnchere}` :"" ) +
            ( this.acheteur != undefined ?`, acheteur : ${this.acheteur.getNom(), this.acheteur.getPrenom()}` :"") +
            "]";
    }

    // Methode encherir exigée par Vendable
    public encherir( nouvelleEnchere: number, acheteur: Acheteur ): void {
        
        this.meilleureEnchere = nouvelleEnchere;
        this.acheteur = acheteur;
    }
}