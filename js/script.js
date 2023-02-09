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

    if (palindrome(word, reverseWord)) {
        result.innerHTML += 'la parola è palindroma'

    } else {
        result.innerHTML += 'la parola NON è palindroma'
    }
}
)

/**function rec*/
function palindrome(string1, string2) {
    if (string1 === string2) {
        return true
    } else {
        return false
    }

}
// soluzione con ciclo FOR
// button.addEventListener('click', function () {
      
//     if (isPalindrome(revWord)) {
//         result.innerHTML += 'la parola è palindroma'

//     } else {
//         result.innerHTML += 'la parola NON è palindroma'
//     }
// }
// )

// function isPalindrome (stringa2){
//     let word = document.getElementById('word').value.toLowerCase() 
//     let revWord =''
//     for (let i = stringa2.length -1; i >= 0 ; i--){
//     const letter = stringa2[i]
//     revWord += letter
//     console.log(letter,revWord)
//     const result = word === stringa2
//     return result
// }
// }









//**PARI O DISPARI */
let play = document.getElementById('play')

play.addEventListener('click', function () {
    
    let choise = document.getElementById('choise').value.toLowerCase()
    let userNumber = parseInt(document.getElementById('user-number').value)
    let pcNumberEl = document.getElementById('random-number')
    let sumEl = document.getElementById('sum')
    let resultGame = document.getElementById('result-game') 
    //genera numero random
    let pcNumber = Math.floor(Math.random()*(5)+1)
    pcNumberEl.innerHTML = 'Il Pc ha il numero : '+pcNumber
    

    //somma i due numeri   
    let sum = userNumber + pcNumber
    sumEl.innerHTML = 'la somma dei numeri è : '+sum
    console.log (choise, userNumber, pcNumber, sum)
    //controlla se pari o dispari
    if (
        (isEven(sum) && choise === 'pari') ||
        (!isEven(sum) && choise === 'dispari')) {
        resultGame.innerHTML += 'HAI VINTO !'
    } else {
        resultGame.innerHTML += 'HAI PERSO !'
    }
}
)

//**function pari */

function isEven(num) {
    let rest = num % 2
    if (rest === 0) {
        return true
    } else {
        return false
    }
}


