console.log('paliedispari')

let button = document.getElementById('button')
let result = document.getElementById('result-word')
//***PAROLA PALINDROMA **//
button.addEventListener('click', function () {
    let word = document.getElementById('word').value.toLowerCase()
    console.log(word)
    let reverseWord = word.split('').reverse().join("")
    console.log(reverseWord)

    if (palindromo(word,reverseWord)) {
        console.log('la parola è palindroma')
        result.innerHTML += 'la parola è palindroma'

    } else {
        result.innerHTML += 'la parola NON è palindroma'
    }
}
)
/**function rec*/
function palindromo(string1 , string2) {
    let result
    if(string1 === string2){
        return true
    } else {
        return false
    }
    
}





//chiedi all'utente di inserire una parola
//analizza la parola inserita SE letta al contrario è uguale ALLORA è palindroma
//restituisci il risultato all'utente

//**PARI O DISPARI */
//far scegliere all'utente pari o dispari
//chiedi all'utente di inserire un numero da 1 a 5
//genera un numero random da 1 a 5
//somma i due numeri ottenuti e verifica se siano pari o dispari
//restituisci il risultato all'utente (hai vinto/hai perso)
