// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.





const lista = ["toto1@africa.it", "toto2@africa.it", "toto3@africa.it", "toto4@africa.it", "toto5@africa.it", "qualcuno@gmail.it", "totorina@camorra.it"];


const miaMail = prompt("Qual è la tua mail");
console.log("Mail immessa: " + miaMail);

let presenza = 0;


for(let i = 0; i < lista.length; i++){
    // console.log("mail: " + lista[i]);
    if (lista[i] === miaMail){
        presenza++;
        
    };

};

if (presenza === 0){
    console.log("NON presente");

}else if (presenza === 1){
    console.log("Presente!");

}else {
    console.log("ERRORE");

};





// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }