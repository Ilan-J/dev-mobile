import { Affichable } from "../interface/Affichable";

// Classe Auteur qui implémente Affichable
// Doit donc contenir une méthode afficher(): string
export class Auteur implements Affichable {
    
    private nom: string = '';
    private prenom: string = '';

    // Constructeur qui définit les attributs
    constructor( nom: string, prenom: string ) {

        this.nom = nom;
        this.prenom = prenom;
    }

    public getNom(): string {
        return this.nom;
    }
    public getPrenom(): string {
        return this.prenom;
    }

    // On implémente Affichable, on doit avoir cette méthode
    public afficher(): string {
        
        // Renvoie une string
        return `${this.nom} ${this.prenom}`;
    }
}