let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/152'
titulo.innerHTML = cabeca.innerHTML = 'DEZ VALORES'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {
    
    let X = Number(inputA.value)
    let aux0 = X+10
    let array = []
    
    if (X<(-100000)||X>1000000) {
        console.log('[ERRO] O valor de X não é aceitável: -100.000<=X<=1.000.000.')
    }
 
    while (X<aux0) {
        array.push(aux0)
        aux0--
    }
    array.sort()
    output1.innerHTML = array
}