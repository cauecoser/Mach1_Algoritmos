let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/135'
titulo.innerHTML = cabeca.innerHTML = 'Subtração'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {
    
    A = inputA.value
    B = inputB.value

    sub = A-B
    output1.innerHTML = `A subtração entre os números inteiros ${A} e ${B} é ${sub}.`
}