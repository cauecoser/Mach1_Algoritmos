let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/2'
titulo.innerHTML = cabeca.innerHTML = 'Medalhas'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    T1 = inputA.value
    T2 = inputB.value
    T3 = inputC.value

    array = [T1,T2,T3]
    array.sort((a,b)=>a-b)
    output1.innerHTML = `A medalha de ouro foi para o nadador ${array.indexOf(T1)+1}, a de prata para o nadador ${array.indexOf(T2)+1} e a de bronze para nadador ${array.indexOf(T3)+1}.`

}