let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Faça um programa que leia dois números inteiros digitados pelo teclado e imprima a soma deles.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let A = inputA.value.toString().replace(',','.')
    let B = inputB.value.toString().replace(',','.')
    let soma = Number(A)+Number(B)

    output1.innerHTML = `A soma entre ${A} e ${B} é ${soma}.`
}