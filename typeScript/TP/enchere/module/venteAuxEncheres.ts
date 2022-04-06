export module VenteAuxEncheres {
    
    // ###########
    // Interfaces
    // ###########

    export interface Affichable {

        afficher(): string;
    }

    export interface Vendable {
        // Attribut attendu
        meilleureEnchere: number;
    
        // Attribut de liaison (0..1)
        acheteur?: Acheteur;
    
        // Méthode encherir
        encherir ( nouvelleEnchere : number, acheteur : Acheteur ): void;
    }

    // ########
    // Classes
    // ########

    export class Acheteur {
        private nom: string = '';
        private prenom: string = '';
    
    
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
    }

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

    export class Livre extends Oeuvre {

        constructor(titre : string, annee : number, auteurs : Auteur[]) {
            
            super( titre, annee, auteurs );
        }
    }
    export class Peinture extends Oeuvre {

        constructor(titre : string, annee : number, auteurs : Auteur[]) {
            
            super( titre, annee, auteurs );
        }
    }
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
}