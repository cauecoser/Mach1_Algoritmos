let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Faça um programa que leia dois números reais A e B digitados pelo teclado e imprima a divisão de A por B. A entrada consiste de dois números reais A e B, um em cada linha. A saída do seu programa deve ser um número real S, representando a divisão de A por B com precisão de 2 casas decimais.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {
    let A = inputA.value.toString().replace(',', '.')
    let B = inputB.value.toString().replace(',', '.')

    if (B == 0) { alert('[ERRO] É impossível realizar uma divisão por "0".') }
    else {
        let S = (Number(A) / Number(B)).toFixed(2)
        output1.innerHTML = `O resultado da divisão com duas casas decimais é ${S}.`
    }
}