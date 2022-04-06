import { Auteur } from "./Auteur";
import { Oeuvre } from "./Oeuvre";

export class Peinture extends Oeuvre {

    constructor(titre : string, annee : number, auteurs : Auteur[]) {
        
        super( titre, annee, auteurs );
    }
}