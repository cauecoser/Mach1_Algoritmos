let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/110'
titulo.innerHTML = cabeca.innerHTML = 'Consecutivos'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

let numbers = []
inputA.focus()

function getArray(de, ate) {
    for (i = 0; i < inputA.value; i++) {
        numbers.push(Math.floor(Math.random() * ((ate + 1) - de) + de))
    }
}


function fazer() {

    let cont = 0
    let maior = 0

    getArray(1, 3)

    for (j = 1; j < inputA.value; j++) {

        if (numbers[j] !== numbers[(j - 1)]) {
            if (maior <= cont) {
                maior = cont
                cont = 0
                console.log(cont,maior)
            } else {
                cont = 0
            }
        } else {
            cont++
            console.log(cont,maior)
        }
    }
    output1.innerHTML = numbers
    output2.innerHTML = cont
    output3.innerHTML = maior + 1
    numbers = []
}