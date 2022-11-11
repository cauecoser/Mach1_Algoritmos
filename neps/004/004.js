let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/138'
titulo.innerHTML = cabeca.innerHTML = 'ÁREA DO QUADRADO'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {
    let A = Number(inputA.value)
    let area = A * A

    if (A > 1000 || A < 1) {
        alert('[ERRO] Os valores fornecidos não podem ultrapassar o valor absoluto 1000.')
    } else {
        output1.innerHTML = `A área do quadrado de lado ${A}m é ${area}m².`
    }
}