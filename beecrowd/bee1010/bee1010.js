let A = document.querySelector('#cod')
let B = document.querySelector('#qtd')
let C = document.querySelector('#vun')

let res = document.querySelector('#res')

function calcular() {

    let cod = A.value
    let qtd = B.value
    let vun = C.value

    let tot = qtd * vun
    let strTot = tot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    res.innerHTML = `O valor total a pagar por ${qtd} produtos "${cod}" é ${strTot}.`

}