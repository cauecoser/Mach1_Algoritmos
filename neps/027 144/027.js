let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/144'
titulo.innerHTML = cabeca.innerHTML = 'Área da Circunferência'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    if (R > 1000) {
        alert('[ERRO] O raio da circunferência não pode ser maior que 1000.')
    } else {
        R = inputA.value
        area = 2 * 3.1416 * R
        output1.innerHTML = `A área da circunferÊncia de raio ${R} é ${area.toFixed(2)}.`
    }
}