let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Enquanto você estava estudando no Neps Academy você viu um problema chamado "Potências Simples" e resolveu lê-lo, o problema pedia para você ler dois números reais e imprimisse um número elevado ao outro. Faça um programa que resolva o problema. Entrada: A entrada é composta por apenas uma linha que contem dois números reais, X e Y. Saída: Seu programa deve imprimir um único número X^Y com 4 casas decimais de precisão. Restrições: 0<=X<=10.000 1<=Y<=10 X^Y<=10^9.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    output1.innerHTML = ''

    let Xv = inputA.value.toString().replace(',', '.')
    let Yv = inputB.value.toString().replace(',', '.')

    let X = Number(Xv)
    let Y = Number(Yv)

    let P = Math.pow(X, Y)

    if (X < 0 || X > 10000 || Y < 1 || Y > 10 || (P > (Math.pow(10, 9)))) {
        alert('[ERRO] Números fora dos parâmetros! Parâmetros: 0<=X<=10.000 | 1<=Y<=10 | X^Y<=10^9.')
    } else {
        
        inputA.value = ''
        inputB.value = ''
        output1.innerHTML = `O valor de ${X} elevado a ${Y} é ${P.toLocaleString('pt-BR', { minimumFractionDigits: 4} )}.`
        
    }
}

