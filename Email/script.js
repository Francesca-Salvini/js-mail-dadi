//Chiedi all’utente la sua email
//Controlla che sia nella lista di chi può accedere
//Stampa un messaggio appropriato sull’esito del controllo.

var emailUtente = prompt("Dimmi la tua email");

var emailDaVerificare = ["prova1@hotmail.it",  "prova2@hotmail.it" , "prova3@hotmail.it" ,  "prova4@hotmail.it" , "prova5@hotmail.it" , "prova6@hotmail.it" , "prova7@hotmail.it"];

var isPresente = false;

for(var i = 0; i < emailDaVerificare.length; i++) {

    if(emailDaVerificare[i] === emailUtente) {
        isPresente = true; 
    }
}

if(isPresente) {
    alert ("email trovata");
} else {
    alert ("email non trovata");
}