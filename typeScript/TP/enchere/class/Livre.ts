import { Auteur } from "./Auteur";
import { Oeuvre } from "./Oeuvre";

export class Livre extends Oeuvre {

    constructor(titre : string, annee : number, auteurs : Auteur[]) {
        
        super( titre, annee, auteurs );
    }
}