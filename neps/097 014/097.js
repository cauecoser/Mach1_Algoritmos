let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/14'
titulo.innerHTML = cabeca.innerHTML = 'Drone de Entrega'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let A = parseInt(Math.floor(Math.random() * (100 - 1) + 1))
    let B = parseInt(Math.floor(Math.random() * (100 - 1) + 1))
    let C = parseInt(Math.floor(Math.random() * (100 - 1) + 1))

    let H = parseInt(Math.floor(Math.random() * (100 - 1) + 1))
    let L = parseInt(Math.floor(Math.random() * (100 - 1) + 1))

    let janela1 = 0
    let janela2 = 0

    let caixa1 = 0
    let caixa2 = 0
    let caixa3 = 0

    if (H >= L) {
        janela1 = H
        janela2 = L
    } else {
        janela1 = L
        janela2 = H
    }

    if (A >= B) {
        if (B >= C) {
            caixa1 = A
            caixa2 = B
            caixa3 = C
        } else {
            if (A >= C) {
                caixa1 = A
                caixa2 = C
                caixa3 = B
            } else {
                caixa1 = C
                caixa2 = A
                caixa3 = B
            }
        }
    } else {
        if (A >= C) {
            caixa1 = B
            caixa2 = A
            caixa3 = C
        } else {
            if (B >= C) {
                caixa1 = B
                caixa2 = C
                caixa3 = A
            } else {
                caixa1 = C
                caixa2 = B
                caixa3 = A
            }
        }

    }

    // Até aqui já sei a ordem de medidas do maior par o menor (janela1>janela2 e caixa1>caixa2>caixa4)

    if ((janela1>=A && janela1>=B && janela1>=C) && (janela2>A || janela2>B || janela2>C)) {
        output1.innerHTML = "É possível entregar a encomenda."
    } else {
        output1.innerHTML = "Não é possível entregar a caixa por conta das dimensões."
    }
    output2.innerHTML = `${A} x ${B} x ${C} | ${H} x ${L}`


}