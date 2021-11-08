console.log('JS OK');

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//scelta di pari o dispari
const scelta = prompt('scegli pari o dispari')

//scelta numero
const num = parseInt(prompt('inserisci un numero da 1 a 5'))

//genero numero casuale per il 
const num_com = randomize(1, 5)

//eseguo la somma dei numeri
const num_sum = num + num_com

console.log(num_com);
console.log(num);
console.log(num_sum);

let somma = oddeven(num_sum)

//verifico se la somma è uguale alla scelta dell utente
if (somma === 'pari' && scelta === 'pari' || somma === 'dispari' && scelta === 'dispari') {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

//funzioni
function randomize(num1, num2) {
    let randomnumber
    randomnumber = Math.floor((Math.random() * num2) + num1)
    return randomnumber
}

function oddeven(num) {
    let risultato
    if (num % 2 === 0) {
        risultato = 'pari'
    } else {
        risultato = 'dispari'
    }
    return risultato
}