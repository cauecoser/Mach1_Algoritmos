let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/241'
titulo.innerHTML = cabeca.innerHTML = 'Campo Minado'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    let array = []
    let novoArray = []
    let N = inputA.value
    let aux = 0

    for (i = 0; i < N; i++) {
        let n = parseInt(Math.random(0, 2) * 2)
        array.push(n)
    }

    for (i=0;i<=N; i++) {

        if (i == 0) {
            aux = array[0] + array[1]
            novoArray.push(aux)
        } else if ((i>0)&&(i<(N-1))) {
            aux = array[(i - 1)] + array[(i)] + array[(i+1)]
            novoArray.push(aux)
        } else if (i==N) {
            aux = array[(N-1)] + array[N-2]
            novoArray.push(aux)
        }
    }
    output1.innerHTML = array
    output2.innerHTML = novoArray
}