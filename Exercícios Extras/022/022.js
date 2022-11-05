let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/160'
titulo.innerHTML = cabeca.innerHTML = 'Vestibular'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    let N = inputA.value
    let check = []
    let answs = []
    let acertos = 0

    let str = N.toString()
    let spl = str.split('.')

    if (N < 1 || N > 80 || isNaN(N) || spl[1] > 0) {
        alert('[ERRO] O número não questões não é um valor válido. Ele deve ser um número e deve satisfazer a sentença 1<=N<=80.')
        output1.innerHTML = "A saída 1 estará aqui."
        output2.innerHTML = "A saída 2 estará aqui."
        output3.innerHTML = "A saída 3 estará aqui."
        inputA.value = ''
        inputA.focus()
    } else {
        for (i = 0; i < N; i++) {

            check.push(Math.floor(Math.random() * (6 - 1) + 1))
            answs.push(Math.floor(Math.random() * (6 - 1) + 1))

            if (check[i] == answs[i]) {
                acertos += 1
            }
        }

        let nota = ((acertos / N * 10).toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        output1.innerHTML = `Gabarito: ${check}.`
        output2.innerHTML = `Respostas: ${answs}`
        output3.innerHTML = `${acertos} questões do total de ${N} foram respondidas corretamente. Nota: ${nota}.`
        inputA.value = ''
        inputA.focus()
    }
}