console.log('JS OK');

/*
Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
*/

//COSTANTI

const Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const best_players = []
const player = [
    {
        "codice_giocatore": '',
        "nome": 'Marco',
        "cognome": 'Davoli',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Mattia',
        "cognome": 'Fiaccadori',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Mattia',
        "cognome": 'Barbieri',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Marco',
        "cognome": 'Chiesi',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Mirko',
        "cognome": 'Marciano',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Luca',
        "cognome": 'Morellini',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Andrea',
        "cognome": 'Zaghi',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Andrea',
        "cognome": 'Gaggiano',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Procolo',
        "cognome": 'Falanga',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
    },
    {
        "codice_giocatore": '',
        "nome": 'Giuseppe',
        "cognome": 'Marini',
        "età": '25',
        "ppm": '',
        "threePointerSuccessfull": '',
}];

//generator for players
player.forEach(element => {
    codiceGiocatoreGenerator(element);
    ppmGenerator(element);
    threePointerSuccessfull(element);
    console.log(element.nome, element.cognome, element.età, element.codice_giocatore);
});

for (let i = 0; i < player.length; i++) {
    if (player[i].ppm > 35 && player[i].threePointerSuccessfull > 80)
    best_players.push(player[i])
}

console.table(best_players);

//FUNCTIONS
function codiceGiocatoreGenerator(player) {
    player.codice_giocatore = codeGenerator()
};

function ppmGenerator(player) {
    player.ppm = randomNum(50, 0)
};

function threePointerSuccessfull(player) {
    player.threePointerSuccessfull = randomNum(100, 0)
};

function codeGenerator() {
    let letter = ''
    let code = ''
    letter = Letters[Math.floor(Math.random() * Letters.length)];
    code += letter
    letter = Letters[Math.floor(Math.random() * Letters.length)];
    code += letter
    letter = Letters[Math.floor(Math.random() * Letters.length)];
    code += letter
    numberString = numbers[Math.floor(Math.random() * numbers.length)];
    code += numberString
    numberString = numbers[Math.floor(Math.random() * numbers.length)];
    code += numberString
    numberString = numbers[Math.floor(Math.random() * numbers.length)];
    code += numberString
    return code
};

function randomNum(num1, num2) {
    let num
    num = Math.floor(Math.random() * (num1 + 1) + num2)
    return num
}