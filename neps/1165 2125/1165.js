let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/2125'
titulo.innerHTML = cabeca.innerHTML = 'Fechem as Portas!'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let N = inputA.value
    let quartos = []

    for (let a = 0; a < N; a++) {
        quartos[a] = false
    }
    output1.innerHTML = quartos

    output2.innerHTML=''
    for (let j = 1; j <= N; j++) {
        for (let i = 1; i <= N; i++) {
            if (i % j == 0 || i % j == j) {
                quartos[(i - 1)] = quartos[(i - 1)] !== true
            }
        }
        
        output2.innerHTML += '-->'+quartos
    }
    output3.innerHTML = quartos
}