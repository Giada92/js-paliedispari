/* 1 - Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


//chiedere all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola!").toLowerCase();
console.log(parolaUtente);


//split: crea un array di lettere separate
//reverse: inverte l'ordine dei singoli elementi (in questo caso singole lettere) di un array
//join: trasforma un array in stringa
var invertiStringa = parolaUtente.split("").reverse("").join("");
console.log(invertiStringa);

//capire se la parola inserita è palindroma
function palindroma (parola) {

    if (parolaUtente == invertiStringa){
        return true;
    } else {
        return false;
    }
}

var verifica = palindroma(parolaUtente);
console.log(verifica);

var messaggio = "";

if (verifica == true && parolaUtente == invertiStringa) {
    messaggio = "La Parola inserita è: " + parolaUtente + " ed è Palindroma!"
} else {
    messaggio = "La Parola inserita è: " + parolaUtente + " e non è Palindroma!"
}

document.getElementById("frase").innerHTML = messaggio;
console.log(messaggio);