/**
 * 
 *      1. Cercare un numero in un array e stampare un messaggio all'utente
 * 
 *      Step da fare:
 *          a. dichiarazione dell'array
 *          a.1 chiedere un numero all'utente
 *          b. scorrere l'array per trovare il numero da cercare
 *          c. se il numero c'è nell'array, stampo un messaggio positivo; altrimenti, stampo un messaggio negativo
 * 
 */
// console.log('myArray', myArray);
// const userPrompt = parseInt(prompt('Inserisci un numero'));
// console.log('userPrompt', userPrompt);
// let found = false;

// // for(let i = 0; i < myArray.length; i++){
// let index = 0;
// while(index < myArray.length && found != true){
//     console.log(index);

//     if(userPrompt == myArray[index]){
//         found = true;
//     }

//     index++;
// }

// if(found == true){
//     console.log('IF');
//     alert('Numero trovato! ' + userPrompt);
// }
// else{
//     console.log('ELSE');
//     alert('Numero non trovato...');
// }


const arrUno = [1, 2, 3];
const arrDue = [4, 5, 6];
const arrTre = [7, 8, 9];

function cercaNumero(ciccio) {
    console.log('ciccio', ciccio);
    const userPrompt = parseInt(prompt('Inserisci un numero'));
    console.log('userPrompt', userPrompt);
    let found = false;
    
    // for(let i = 0; i < ciccio.length; i++){
    let index = 0;
    while(index < ciccio.length && found != true){
        console.log(index);
    
        if(userPrompt == ciccio[index]){
            found = true;
        }
    
        index++;
    }

    return found;
}

const foundUno = cercaNumero(arrUno);   // ciccio = [1, 2, 3]

const foundDue = cercaNumero(arrDue);   // ciccio = [4, 5, 6]
console.log('foundDue:', foundDue);

if(foundUno == true){
    console.log('foundUno:', foundUno);
}
    
// if(foundUno == true){
//     console.log('IF');
//     alert('Numero trovato! ' + userPrompt);
// }
// else{
//     console.log('ELSE');
//     alert('Numero non trovato...');
// }


// if(foundUno == true){
//     alert('Controllo di nuovo ed è positivo');
// }

// ...


// const esecuzioneDue = cercaNumero(arrDue);





// ...



// const esecuzioneTre = cercaNumero(arrTre);



/**
 * 
 *      2. Trovare il minimo in un array e mostrarlo all'utente
 * 
 *      Step da fare:
 *          a. dichiarare un array
 *          b. scorriamo l'array
 *          c. confronto: se...
 * 
 */

//  const myArray = [ 3, 92 , 8 , 46 , 33 ];
//  console.log('myArray', myArray);
 
//  let minimo;
 
//  for (let i = 0; i < myArray.length; i++) {
//      console.log(i, myArray[i]);
 
//      if(myArray[i] < myArray[i + 1]){
//          minimo = myArray[i];
//      }
//  }

// const myArray = [ 72, 3, 92 , 8 , 46 , 33 ];
// console.log('myArray', myArray);

// let minimo = myArray[0];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(i, myArray[i]);

//     if(myArray[i] < minimo){
//         minimo = myArray[i];
//     }
// }

// alert('Il minimo è ' + minimo);



































/**
 * 
 *      3. Esercizi 1 e 2, ma ripetuti più volte
 * 
 *      Step da fare:
 *          a. ...
 *          b. ...
 *          c. ...
 * 
 */