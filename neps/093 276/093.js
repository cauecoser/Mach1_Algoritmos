let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/276'
titulo.innerHTML = cabeca.innerHTML = 'COPA DO MUNDO'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')
let output4 = document.querySelector('#output4')
let output5 = document.querySelector('#output5')
let output6 = document.querySelector('#output6')
let output7 = document.querySelector('#output7')
let output8 = document.querySelector('#output8')

// A lógica começa aqui.

function fazer() {
    let A = 0
    let B = 0
    let V1 = []
    let V2 = []
    let V3 = []
    let V4 = []

    for (let i = 1; i <= 16; i = i + 2) {

        A = parseInt(Math.floor(Math.random() * 6))
        B = parseInt(Math.floor(Math.random() * 6))

        if (A == B) {
            A = parseInt(Math.floor(Math.random() * 6))
            i = i - 2
        } else {
            if (A > B) {
                V1.push(i)
            } else {
                V1.push(i + 1)
            }
            output1.innerHTML += `<br>(Time${i} ${A} x ${B} Time${(i + 1)})`
            output2.innerHTML = V1
        }
    }

    for (let j = 0; j < 8; j = j + 2) {

        A = parseInt(Math.floor(Math.random() * 6))
        B = parseInt(Math.floor(Math.random() * 6))

        if (A == B) {
            A = parseInt(Math.floor(Math.random() * 6))
            j = j - 2
        } else {
            if (A > B) {
                V2.push(V1[j])
            } else {
                V2.push(V1[(j + 1)])
            }
            output3.innerHTML += `<br>(Time${V1[j]} ${A} x ${B} Time${V1[(j + 1)]})`
            output4.innerHTML = V2
        }
    }
    
    for (let k = 0; k < 4; k = k + 2) {

        A = parseInt(Math.floor(Math.random() * 6))
        B = parseInt(Math.floor(Math.random() * 6))

        if (A == B) {
            A = parseInt(Math.floor(Math.random() * 6))
            k = k - 2
        } else {
            if (A > B) {
                V3.push(V2[k])
            } else {
                V3.push(V2[(k + 1)])
            }
            output5.innerHTML += `<br>(Time${V2[k]} ${A} x ${B} Time${V2[(k + 1)]})`
            output6.innerHTML = V3
        }
    }

    for (let l = 0; l < 2; l = l + 2) {

        A = parseInt(Math.floor(Math.random() * 6))
        B = parseInt(Math.floor(Math.random() * 6))

        if (A == B) {
            A = parseInt(Math.floor(Math.random() * 6))
            l = l - 2
        } else {
            if (A > B) {
                V4.push(V3[l])
            } else {
                V4.push(V3[(l + 1)])
            }
            output7.innerHTML += `<br>(Time${V2[l]} ${A} x ${B} Time${V2[(l + 1)]})`
            output8.innerHTML = V4
        }
    }
}