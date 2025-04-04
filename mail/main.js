// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

//creo lista email
const emailList = [
  `luca@email.it`,
  `francesco@email.it`,
  `beatrice@email.it`,
  `chiara@email.it`,
  `luigi@email.it`,
  `marco@email.it`,
];
console.table(emailList);

const userEmail = prompt("Inserisci la tua email!");

//inizializzo la variabile currentEmail
let currentEmail = "";
let isEmailFound = false;

//Per ogni email presente nell'emailList and finchè la mail non viene trovata
for (let i = 0; i < emailList.length && isEmailFound !== true; i++) {
  currentEmail = emailList[i];
  //se currentEmail è uguale alla userEmail
  if (currentEmail === userEmail) {
    //Email trovata
    isEmailFound = true;
    alert("Email trovata. Puoi accedere alla festa!");
    console.log(currentEmail);
  }
}
