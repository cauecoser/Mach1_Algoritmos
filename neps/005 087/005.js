let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/87'
titulo.innerHTML = cabeca.innerHTML = 'Flíper'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

inputA.focus()

function fazer() {

    let P = inputA.value
    let R = inputB.value

    if (P != 0 && P != 1 || R != 0 && R != 1) {
        alert('[ERRO] Os valores inseridos não são posições válidas para as portas do problema.')
    } else {
        if (P == 1) {
            if (R == 1) {
                output1.innerHTML = `O caminho é "A"`
            } else {
                output1.innerHTML = `O caminho é "B"`
            }
        } else {
            output1.innerHTML = `O caminho é "C".`
        }
    }
    inputA.focus()
}