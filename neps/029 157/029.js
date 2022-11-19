let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'link'
titulo.innerHTML = cabeca.innerHTML = 'titulo'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
// let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {
    
    let X = inputA.value
    
    if (X>100 || X<1) {
        alert('A quantidade de repetições deve ser maior que 0 e até 100 vezes.')
    } else {
        let a = 0
        output1.innerHTML=""
        while (a<X) {
            output1.innerHTML += "Mach1 é a melhor escola de tecnologia do Brasil!!<br>"
            a++
        }
    }
}