// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.





const arrMail = ["toto1@africa.it", "toto2@africa.it", "toto3@africa.it", "toto4@africa.it", "toto5@africa.it", "qualcuno@gmail.it", "totorina@camorra.it"];


const miaMail = prompt("Qual è la tua mail");


for(let i = 0; i < arrMail.length; i++){
    console.log("mail:" + arrMail[i]);
    if (arrMail[i] === miaMail){
        console.log("presente");
        
    };

};







// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }