// Creo un prompt, dove l'utente deve inserire la parola o la frase da esaminare""
let chosenWord = prompt("Inserisci la parola da esaminare").toLowerCase().replaceAll(" ", "");

// Creo una funziona dove inverte la singola parola specificata nel prompt

function wordPalindroma (chosenWord){

  let word = "";

  for (let i = chosenWord.length -1; i >= 0; i--){
    let letter = chosenWord[i];
    word += letter    
    console.log(word)
  }
  return word
}
// Uso la funzione wordPalindroma creata in precedenza
let palindroma = wordPalindroma(chosenWord);

// Creo una condizione
if ( palindroma == chosenWord){
  alert("La parola che hai inserito è palindroma")
} else{
  alert("La parola che hai inserito non è palindroma")
}
