//Generare un numero random [da 1 a 6] per il giocatore (utente)
//Generare un numero random [da 1 a 6] per il computer
//Stabilire chi ha vinto in base a chi fa il punteggio più alto


//Genera un numero random [da 1 a 6] per l'utente
var numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore " + numeroUtente); 

//Genera un numero random [da 1 a 6] per il computer
var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Computer " + numeroComputer); 

//Confronto chi ha fatto il numero più alto e stabilisco il vincitore

if (numeroUtente < numeroComputer) {
    alert("hai perso");
} else {
    alert("hai vinto");
}

