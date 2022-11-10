
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




// la case serve solo per il colore
const caseUser = document.querySelector(".user");

// assegno numero random a una costante
const numUser = Math.floor(Math.random() * 6) + 1;
// lo stampo
console.log( "User: " + numUser);
// lo mando all'id nell'html
document.getElementById("numUser").innerHTML = numUser;


const casePc = document.querySelector(".pc");
const numPc = Math.floor(Math.random() * 6) + 1;
console.log( "Pc: " + numPc);
document.getElementById("numPc").innerHTML = numPc;



if(numPc > numUser){
    document.getElementById("frecciatina").innerHTML = "Hai perso miseramente";
    console.log("Mi dispiace ma hai perso miseramente");

    
    caseUser.style.backgroundColor = "red";
    casePc.style.backgroundColor = "green";

}else if(numPc < numUser){
    document.getElementById("frecciatina").innerHTML = "Hai vinto";
    console.log("Hai vinto!!!");


    caseUser.style.backgroundColor = "green";
    casePc.style.backgroundColor = "red";
}else{
    document.getElementById("frecciatina").innerHTML = "Parità";
    console.log("Parità");
};


// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }