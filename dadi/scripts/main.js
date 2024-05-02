'use strict';
const dadoUtente = Math.ceil(Math.random() * 6);
const dadoComputer = Math.ceil(Math.random() * 6);
if (dadoUtente > dadoComputer) {
    alert("Ha vinto il giocatore con un lancio di " + dadoUtente + " contro il " + dadoComputer + " del computer");
    console.log(dadoUtente, dadoComputer);
} else if (dadoComputer > dadoUtente) {
    alert("Ha vinto il computer con un lancio di " + dadoComputer + " contro il " + dadoUtente + " dell'utente");
    console.log(dadoComputer, dadoUtente);
} else {
    alert("Pareggio, il giocatore ha giocato " + dadoUtente + " e il computer ha giocato " + dadoComputer);
    console.log(dadoUtente, dadoComputer);
}
location.reload();