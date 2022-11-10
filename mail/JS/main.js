// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.





const lista = ["toto1@africa.it", "toto2@africa.it", "toto3@africa.it", "toto4@africa.it", "toto5@africa.it", "qualcuno@gmail.it", "totorina@camorra.it"];
const risposta = document.getElementById("risposta");


// const miaMail = prompt("Qual è la tua mail");

let presenza = 0;

const tasto = document.querySelector("button");

tasto.addEventListener("click",
    function(){
        let miaMail = document.querySelector("input").value;
        console.log("Mail immessa: " + miaMail);

        
        for(let i = 0; i < lista.length; i++){
            // console.log("mail: " + lista[i]);
            if (lista[i] === miaMail){
                presenza++;
                
            };

        };

        if (presenza === 0){
            risposta.innerHTML = 
            `NON SEI INVITATO, \n
            e vai tra che c'è un motivo`;
            console.log("NON presente");

        }else if (presenza === 1){
            risposta.innerHTML = "HELL YEAH!!! Ti aspetto ;)";
            console.log("Presente!");

        }else {
            console.log("ERRORE");

        };

        presenza = 0;
        document.querySelector("input").value = null;

    }

);







// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }