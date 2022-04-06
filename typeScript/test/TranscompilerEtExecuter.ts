//Déclarations de variables en TypeScript
var unBooleen : boolean = true;
var age : number = 25;
var profession : string ="Informaticien";

//La syntaxe Javascript est possible
var uneVariable = 10;

//Préferez la syntaxe suivante :
var uneAutreVariable : any = 10;
uneAutreVariable="dix";

//Enuméré
// https://www.creacore.be/blog/les-types-enumerables-en-typescript-enum/
enum Etablissement{Maternelle, Primaire, College, Lycee, Faculte};

var etablissement : Etablissement = Etablissement.College;

//afficher
console.log(unBooleen);
console.log(age);
console.log(profession);
console.log(uneVariable);
console.log(uneAutreVariable);
console.log(etablissement);



// ##############################################################################

// classe generique:
class Viande{
    constructor(public type: string) {
    }
}
class Legume{
    constructor(public type: string) {
    }
}
class Poulet extends Viande{};
class Boeuf extends Viande{};
class Carotte extends Legume{};
class Poireau extends Legume{};
// class generique
class Sandwich<V extends Viande, L extends Legume>{
    constructor(public viande: V, public legume: L) {
    }
    public afficher(): void {
        console.log("Sandwich" + this.viande.type + "/" + this.legume.type);
    }
}
let sandwichpouletcarotte: Sandwich<Poulet, Carotte> = new Sandwich<Poulet, Carotte>(new Poulet("fermier"), new Carotte("en argent"));
console.log(sandwichpouletcarotte);