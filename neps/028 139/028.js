let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/139'
titulo.innerHTML = cabeca.innerHTML = 'Área do Retângulo'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    A = inputA.value
    B = inputB.value

    if (A > 1000 || A < 1 || B > 1000 || B < 1) {
        alert('[ERRO] A base e a altura do retângulo não podem ser inferiores a 1, tampouco superiores a 1000.')
    } else {
        area = A * B
        output1.innerHTML = `A área do retângulo de base ${A} e altura ${B} é ${area}.`
    }
}