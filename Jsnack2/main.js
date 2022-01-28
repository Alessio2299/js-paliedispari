// Creo un prompt che faccia scegliere all'utente se pari o dispari
let chosen = prompt("Scegli pari o dispari!").toLowerCase();

while(chosen != "pari" && chosen != "dispari"){
  alert("inserire un valore valido.");
  chosen = prompt("Scegli pari o dispari!").toLowerCase();
}
console.log(chosen)
// Creo una funziona che genera un numero random da 1 a 5 che userò sia per il player che per il computer

function randomNumber (max, min){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

let numberPlayer = randomNumber (5, 1);
let numberComputer = randomNumber (5, 1);
console.log(numberPlayer);
console.log(numberComputer);

// Faccio la somma dei due numeri generati casualmente
let somma = numberPlayer + numberComputer;
console.log(somma)

// Creo una funzione che stabiisca se il numero è pari o dispari
function pariDispari (){
  let resultSomma = "";
  if(somma % 2 == 0){
    resultSomma = "pari";
  }else{
    resultSomma = "dispari";
  }
  return resultSomma;
}
let result = pariDispari();
console.log(result)

// Dichiaro chi ha vinto
if(chosen == result){
  alert("Il tuo numero è: " + numberPlayer + ", mentre il numero del computer è: " + numberComputer + ", la somma dei due numeri è: " + somma + " che un è numero " + result + ". Hai vinto!");
} else{
  alert("Il tuo numero è: " + numberPlayer + ", mentre il numero del computer è: " + numberComputer + ", la somma dei due numeri è: " + somma + " che un è numero " + result + ". Ha vinto il computer!");
}