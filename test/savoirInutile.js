class Savoir {
    localArray = [];

    elementOl = null;
    elementLi = null;

    constructor() {
        this.elementOl = document.getElementById( 'liste' );

        // Get local storage
        let string = localStorage.getItem('savoir');
        if( string ) {
            this.localArray = JSON.parse( string );

            // Display local storage
            this.localArray.forEach(element => {

                this.ajouter( element.savoir, element.auteur, element.date );
            });
        }
        console.log(this.localArray);

        console.info('Class "Savoir" construite');
    }

    ajouter( eP1, eP2, eP3 ) {

        // Balise <li>
        this.elementLi = document.createElement( 'li' );

        // Savoir
        let elementP1 = document.createElement( 'p' );
        elementP1.classList.add( 'savoir' );
        elementP1.innerText = `${eP1}`;

        // Auteur
        let elementP2 = document.createElement( 'p' );
        elementP2.classList.add( 'auteur' );
        elementP2.innerText = `Par : ${eP2}`;

        // Date
        let elementP3 = document.createElement( 'p' );
        elementP3.classList.add( 'date' );
        elementP3.innerText = `Le : ${eP3}`;

        // Boutton de supression
        let elementButton = document.createElement( 'button' );
        elementButton.addEventListener( 'click', (e) => {
            this.supprimer(e);
        });
        elementButton.innerText = 'Supprimer';


        // Lier à la Li
        this.elementLi.appendChild( elementP1 );
        this.elementLi.appendChild( elementP2 );
        this.elementLi.appendChild( elementP3 );
        this.elementLi.appendChild( elementButton );


        // Insérer
        this.elementOl.appendChild( this.elementLi );
    }

    verifSaisie( eP1, eP2, eP3 ) {
        if ( !eP1 || !eP2 || !eP3 ) {

            return false;
        }
        return true;
    }

    stocker( eP1, eP2, eP3 ) {
        let objet = { savoir: eP1, auteur: eP2, date: eP3};
        this.localArray.push( objet );

        let array = JSON.stringify( this.localArray );
        localStorage.setItem( 'savoir', array );
    }

    supprimer( event ) {
        let parent = event.currentTarget.parentNode;
        let index = Array.prototype.indexOf.call( parent.parentNode.childNodes, parent );

        this.localArray.splice( index, 1 );

        let array = JSON.stringify( this.localArray );
        localStorage.setItem( 'savoir', array );

        parent.remove();
    }
}



let savoir = new Savoir();

function ajouter() {
    // 1.Récupérer
    let elSavoir = document.getElementById( 'savoir' ).value;
    let elAuteur = document.getElementById( 'auteur' ).value;
    let elDate = document.getElementById( 'date' ).valueAsDate;

    let tmp = elDate.method;
    console.log(tmp);

    // Vérification saisie
    if ( !savoir.verifSaisie( elSavoir, elAuteur, elDate ) ){

        console.warn( 'Empty form input' );
        return;
    }
    console.log( `Savoir : ${elSavoir} \nAuteur : ${elAuteur} \nDate : ${elDate}` );
    
    // Ajouter
    savoir.ajouter( elSavoir, elAuteur, elDate );

    savoir.stocker( elSavoir, elAuteur, elDate );
}
document.getElementById( 'submit' ).addEventListener( 'click', ajouter );