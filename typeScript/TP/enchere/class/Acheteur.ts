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