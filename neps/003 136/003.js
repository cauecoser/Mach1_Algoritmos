let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/136'
titulo.innerHTML = cabeca.innerHTML = 'MÉDIA INTEIRA'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {
    let A = Number(inputA.value)
    let B = Number(inputB.value)
    let media = parseInt((A+B)/2)

    if (A>1000 || B>1000) {
        alert('[ERRO] Os valores fornecidos não podem ultrapassar o valor absoluto 1000.')
    } else {
    output1.innerHTML = `A média inteira entre ${A} e ${B} é ${media}.`
    }
}