const http = require( 'http' );
const fs = require( 'fs' );


//Reto 3
fs.readFile( './pares_por_dos.csv', function( err, csv ) {

    let paresPorDos = csv.toString().split(',');

    let tableRows = '';

    paresPorDos.forEach( ( num, index ) => {
        tableRows += `<tr>
                        <td> ${index} </td>
                        <td> ${num} </td>
                     </tr>`;
    } );

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reto 2</title>
    </head>
    <body>
        <h1>Reto 2</h1>

        <table>
            <tr>
                <th>Posición</th>
                <th>Valor</th>
            </tr>    
                ${ tableRows }
        </table>

    </body>
    </html>
    `; 

    http.createServer( function( req, res ) {
        res.write( html );
        res.end;
    } ).listen( 8080 );

} ); 

