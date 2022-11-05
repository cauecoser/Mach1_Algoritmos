let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/47'
titulo.innerHTML = cabeca.innerHTML = 'Código (OBI 2015)'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let N = inputA.value
    let str = N.toString()
    let quebraN = str.split('.')
    let seq = ''

    if (N < 1 || N > 10000 || quebraN[1]>0 || str.indexOf(',')>-1) {
        alert('[ERRO] O valor inserido está fora dos parâmetros. A condição 1<=N<=10.000 deve ser satisfeita, assim como não deve haver parte decimal no valor inserido dividido por "." ou "," superior a "0".')
    } else {
        for (i = 0; i < N; i++) {
            seq += parseInt(Math.random(0, 2) * 2)
        }

        let qtd = seq.split('100')
        output1.innerHTML = `A sequência "100" aparece ${(qtd.length - 1)} vezes na sequência aleatória de ${N} algarismos "0" e "1".`
    }
}