let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Dado um número inteiro N, encontre todos os divisores de N. Entrada: A entrada consiste de apenas uma linha contendo o número N. Saída: A saída do seu programa deve conter apenas uma linha com os divisores de N separados por um espaço em branco. Os divisores devem ser impressos em ordem crescente. Restrições: 2<=N<=10^5.'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

inputA.focus()

function fazer() {

    let N = inputA.value
    let array = []
    let valores = ''

    for (i = 0; i <= N; i++) {
        if (N % i == 0) {
            array.push(i)
        }
    }

    if (array.length < 1 || N<2 || N>(Math.pow(10,5))) {
        alert('[ERRO] O valor inserido não é válido. Por gentileza, insira um número inteiro.')
        inputA.value = ''
        inputA.focus()
    } else {
        for(let num in array){
            valores += ' '+array[num]
        }
        intN = parseInt(N)
        output1.innerHTML = `Os divisores de ${intN} são:${valores}.`
        inputA.focus()
        inputA.value = ''
    }
}