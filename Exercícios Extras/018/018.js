let problema = document.querySelector('#descriptionText')

problema.innerHTML = ''

// let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
// let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let A = Math.random(0,2)
    let B = Math.random(0,2)
    let C = Math.random(0,2)
    
    output1.innerHTML = `Alice escolheu ${A}, Beto escolheu ${B} e Clara escolheu ${C}.`

    if (A===B===C) {
        output2.innerHTML = `Não houve vencedor.`
    } else {
        if (A===B!==C) {`O vencedor foi Clara!`}
        else if (A!==B===C) {`O vencedor foi Alice!`}
        else {`O vencedor foi Beto!`}
    }
}