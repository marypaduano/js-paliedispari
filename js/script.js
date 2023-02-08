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
//far scegliere all'utente pari o dispari
//chiedi all'utente di inserire un numero da 1 a 5
//genera un numero random da 1 a 5
//somma i due numeri ottenuti e verifica se siano pari o dispari
//restituisci il risultato all'utente (hai vinto/hai perso)
let play = document.getElementById('play')

play.addEventListener('click', function () {
    let choise = document.getElementById('choise').value
    let userNumber = parseInt(document.getElementById('user-number').value)
    let pcNumber = document.getElementById('random-number')
    pcNumber = Math.floor(Math.random()*(5)+1)
    let resultGame = document.getElementById('result-game')    
    let sum = userNumber + pcNumber
    console.log (choise, userNumber, pcNumber, sum)

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

