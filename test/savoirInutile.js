class Savoir {
    localArray = [];

    textMonth = ['Jan.', 'Fev.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Jui.', 'Aout', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

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

                this.ajouter( element.savoir, element.auteur, new Date(element.date) );
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
        elementP3.innerText = `Le : ${ eP3.getDate() } ${ this.textMonth[ eP3.getMonth() ] } ${ eP3.getFullYear() }`;

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

    trier( i = false ) {
        if( i == true ) {
            this.localArray.sort( ( a, b ) => new Date( b.date ) - new Date( a.date ) );

            console.info( 'Trier par Date' );

        } else {
            this.localArray.sort( ( a, b ) => a.savoir.localeCompare( b.savoir ) );

            console.info( 'Trier par ordre Alphabétique' );
        }
        console.log( this.localArray );

        // Display local storage
        this.elementOl.replaceChildren();

        this.localArray.forEach(element => {

            this.ajouter( element.savoir, element.auteur, new Date( element.date ) );
        });
    }
}



let savoir = new Savoir();

function ajouter() {
    // 1.Récupérer
    let elSavoir = document.getElementById( 'savoir' ).value;
    let elAuteur = document.getElementById( 'auteur' ).value;
    let elDate = document.getElementById( 'date' ).valueAsDate;

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

document.getElementById( 'textSorting' ).addEventListener( 'click', () => { savoir.trier() } );
document.getElementById( 'dateSorting' ).addEventListener( 'click', () => { savoir.trier( true ) } );