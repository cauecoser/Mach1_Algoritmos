let problema = document.querySelector('#descriptionText')

problema.innerHTML = ''

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


let array = []
let raizes = []

function incluir() {

    let A = inputA.value.toString().replace(',','.')
    let NA = Number(A)
    
    array.push(NA)
    raiz = Math.sqrt(NA).toFixed(4)
    raizes.push(raiz)
    
    inputA.value=''
    inputA.focus()
    
}

function fazer() {

   
    output1.innerHTML = `Os números incluídos foram ${array}.`
    output2.innerHTML = `As raízes quadradas dos números inluídos são, respectivamente: ${raizes}`

    array = []
    raizes = []
}

