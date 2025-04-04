// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random da 1 a 6 per user
let userRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(userRandomNumber);
// genero numero random da 1 a 6 per pc
let pcRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcRandomNumber);

// se il numero random dell'user > numero random pc vince user
if (userRandomNumber > pcRandomNumber) {
  alert(`
    Numero user: ${userRandomNumber}
    Numero pc: ${pcRandomNumber}
    Il vincitore è l'utente!`);
  console.log("Il vincitore è l'utente!");
  // altrimenti se il numero random dell'user = numero random pc non c'è un vincitore
} else if (userRandomNumber === pcRandomNumber) {
  alert(`
    Numero user: ${userRandomNumber}
    Numero pc: ${pcRandomNumber}
    Non c'è un vincitore!`);
  console.log("Non c'è un vincitore!");
  // altrimenti vince pc
} else {
  alert(`
    Numero user: ${userRandomNumber}
    Numero pc: ${pcRandomNumber}
    Il vincitore è il pc!`);
  console.log("Il vincitore è il pc!");
}
