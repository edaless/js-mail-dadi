
// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const numUser = Math.floor(Math.random() * 6) + 1;
console.log( "User: " + numUser);
const numPc = Math.floor(Math.random() * 6) + 1;
console.log( "Pc: " + numPc);


if(numPc > numUser){
    console.log("Mi dispiace ma hai perso miseramente");
}else if(numPc < numUser){
    console.log("Hai vinto!!!");
}else{
    console.log("Parità");
};


// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }