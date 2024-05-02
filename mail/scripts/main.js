'use strict';

const emailUtente = prompt("Inserisci la tua Email");
const listaEmail = ["pincopallo@gmail.com", "topogigio@gmail.com", "marcorossi@libero.it", "jhoncena@gmail.com", "jhoemama@gmail.com"];
console.log(listaEmail);
//valido l'email inserita dall'utente
function ValidateEmail(emailUtente) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailUtente)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
//verifico che l'email inserita dall'utente sia conforme
if (ValidateEmail(emailUtente) === true) {
    console.log("OK");
    //faccio un ciclo confrontando l'email utente con la lista delle email
    for (let i = 0; i < listaEmail.length; i++) {
        let validatore = i;
        //confronto l'email utente con la lista partendo da 0
        if (emailUtente === listaEmail[i]) {
            alert("Hai inserito un'email valida!!!")
            break;
            //se non esco prima allora l'email risulta invalida
        } else if (validatore === listaEmail.length - 1) {
            alert("Email invalida");
        }
    }
} else {
    alert("Insert a valid email");
}
//ricarico la pagina ogni volta dopo il click OK del prompt
location.reload();