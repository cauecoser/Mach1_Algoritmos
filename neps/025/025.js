let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'http://127.0.0.1:5500/Mach1_Algoritmos/neps/025/025.html'
titulo.innerHTML = cabeca.innerHTML = 'Fibonacci'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    let A = 1
    let B = 1
    let X = 0

    let N = inputA.value


    if (N <= 2) {
        output1.innerHTML = 1
    } else {
        for (i = 2; i <= N; i++) {
            X = A + B
            A = B
            B = X
        }
        output1.innerHTML = `O valor do número ${N} da sequência de Fibonacci é ${X}.`
    }
}