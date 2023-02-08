console.log('paliedispari')
//***PAROLA PALINDROMA **//
//chiedi all'utente di inserire una parola
//analizza la parola inserita SE letta al contrario è uguale ALLORA è palindroma
//restituisci il risultato all'utente
let button = document.getElementById('button')
let result = document.getElementById('result-word')

button.addEventListener('click', function () {
    let word = document.getElementById('word').value.toLowerCase()
    // console.log(word)
    let reverseWord = word.split('').reverse().join("")
    // console.log(reverseWord)

    if (palindromo(word, reverseWord)) {
        result.innerHTML += 'la parola è palindroma'

    } else {
        result.innerHTML += 'la parola NON è palindroma'
    }
}
)
/**function rec*/
function palindromo(string1, string2) {
    let result
    if (string1 === string2) {
        return true
    } else {
        return false
    }

}







//**PARI O DISPARI */
let play = document.getElementById('play')

play.addEventListener('click', function () {

    //recupera elementi dal DOM
    let choise = document.getElementById('choise').value
    let userNumber = parseInt(document.getElementById('user-number').value)
    let pcNumber = document.getElementById('random-number')
    let sum = document.getElementById('sum')
    let resultGame = document.getElementById('result-game') 
    //genera numero random
    pcNumber = Math.floor(Math.random()*(5)+1)

    //somma i due numeri   
    sum = userNumber + pcNumber
    console.log (choise, userNumber, pcNumber, sum)
    //controlla se pari o dispari
    if (
        (isEven(sum) && choise === 'pari') ||
        (isOdd(sum) && choise === 'dispari')) {
        resultGame.innerHTML += 'HAI VINTO !'
    } else {
        resultGame.innerHTML += 'HAI PERSO !'
    }
}
)

//**function pari o dispari */

function isEven(num) {
    let rest = num % 2
    if (rest === 0) {
        return true
    } else {
        return false
    }
}

function isOdd(num) {
    let rest = num % 2
    if (rest === 1) {
        return true
    } else {
        return false
    }
}

