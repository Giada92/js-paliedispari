/* 2 - Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//l'utente sceglie tra pari e dispari
do {

    var parolaUtente = prompt("Scegli tra pari e dispari!").toLowerCase();

}while (parolaUtente != "pari" && parolaUtente != "dispari");
console.log(parolaUtente);

//utente sceglie un numero tra 1 e 5
do {

    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5!"));

}while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1);

console.log(numeroUtente);

//funzione per generare un numero da 1 a 5 per il computer
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeroPC = numeroRandom(1, 5);
console.log(numeroPC);


//somma tra il numero scelto dall'utente e il numero random del pc
var risultato = numeroUtente + numeroPC;
console.log(risultato);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven (num) {
    // return num % 2 === 0;
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var verifica = isEven(risultato);
console.log(verifica);

var messaggio = "";
var h1 = document.getElementById("messaggio");

// pari | pari
if (verifica ==  true && parolaUtente == "pari" || verifica == false  && parolaUtente == "dispari") {
    messaggio = "Hai Vinto";
} else {
    messaggio = "Hai Perso";
}
console.log(messaggio);
h1.innerHTML = messaggio;