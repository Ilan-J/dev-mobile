import { Acheteur } from "../class/Acheteur";

export interface Vendable {
    // Attribut attendu
    meilleureEnchere: number;

    // Attribut de liaison (0..1)
    acheteur?: Acheteur;

    // Méthode encherir
    encherir ( nouvelleEnchere : number, acheteur : Acheteur ): void;
}