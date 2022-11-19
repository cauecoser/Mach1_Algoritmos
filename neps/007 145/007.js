let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/145'
titulo.innerHTML = cabeca.innerHTML = 'POSITIVO, NEGATIVO OU NULO'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    let x = inputA.value

    if (x > 1000) {
        alert('[ERRO] Valor absoluto superior ao permitido: 1000.')
    }
    
    if (x == 0) {
        output1.innerHTML = "NULO"
    } else {
        if (x > 0) {
            output1.innerHTML = "POSITIVO"
        } else {
            output1.innerHTML = "NEGATIVO"
        }
    }
}