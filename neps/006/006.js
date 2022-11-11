let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/13'
titulo.innerHTML = cabeca.innerHTML = 'BONDINHO'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let A = Number(inputA.value)
    let M = Number(inputB.value)

    let soma = A + M

    if (A >= 50 || M >= 50 || A < 1 || M < 1) {
        alert('[ERRO] O número de alunos e de monitores não pode ser igual ou superior a 50 nem menor que 1.')
    } else {
        if ((soma) > 50) {
            output1.innerHTML = `Não é possível levar todos os ${A} alunos e os ${M} monitores pois totalizam ${soma} pessoas.`
        } else {
            output1.innerHTML = `É possível levar todos os ${A} alunos e os ${M} monitores pois totalizam ${soma} pessoas.`
        }
    }
}