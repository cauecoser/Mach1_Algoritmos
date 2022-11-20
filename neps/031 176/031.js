let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/176'
titulo.innerHTML = cabeca.innerHTML = 'Ordenação Simples'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {
    
    let N = inputA.value
    let array = []
 
    if (N<1||N>100000) {
        alert('[ERRO] O valor de N não é válido: 1<=N<=100000.')
    }

    for (let i = 0; i<N ;i++) {
        array.push(Math.floor(Math.random()*(1000000000+1000000000)-1000000000))
    }
    output1.innerHTML = `Os ${N} números gerados aleatoriamente entre -1.000.000.000 e 1.000.000.000 são: ${array}.`
    array.sort()
    output2.innerHTML = `Os números gerados aleatoriamente, organizados em ordem crescente são: ${array}.`
}