const fs = require( 'fs' );

//Reto 1
let pares = [];

for( let i = 1; i < 50; i++ ) {
    if( i % 2 === 0 ) {
        pares.push( i );
    }
}

fs.writeFile( 'pares.csv', pares.toString() , function( err ) {
    if( err ) {
        console.log( err );
    } 
    console.log( 'archivo salvado' );
} );

//Reto 2
fs.readFile( './pares.csv', function( err, csv ) {

    pares = csv.toString().split(',');
    
    let paresPorDos = pares.map( ( num ) => {
        parseInt( num );
        return num * 2; 
    });

    fs.writeFile( 'pares_por_dos.csv', paresPorDos.toString() , function( err ) {
        if( err ) {
            console.log( err );
        } 
        console.log( 'archivo salvado' );
    } );

} );
