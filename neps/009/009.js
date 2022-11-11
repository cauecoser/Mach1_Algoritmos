let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/148'
titulo.innerHTML = cabeca.innerHTML = 'PAR OU ÍMPAR'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

let B = parseInt(inputA.value)
let C = parseInt(inputB.value)
let soma = B+C

    if (B>10||C>10||B<0||C<0) {
        alert('[ERRO] Número de dedos impossível.')
    }
    if (inputA.value==""||inputB.value=="") {
        alert('[ERRO] Os dois jogadores precisam jogar.')
    }
    if(soma%2==0) {
        output1.innerHTML = "BINO!"
    } else {
        output1.innerHTML = "CINO!"
    }
}