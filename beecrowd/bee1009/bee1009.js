let A = document.querySelector('#nomeVendedor')
let B = document.querySelector('#salario')
let C = document.querySelector('#vendas')

let res = document.querySelector('#res')

function calcular() {

    let nomeVendedor = A.value
    let salario = Number(B.value)
    let vendas = Number(C.value)

    let total = salario + (15/100*vendas)

    let strTotal = total.toLocaleString()

    res.innerHTML = `O vendedor ${nomeVendedor} deverá receber o total de R$ ${Number(strTotal).toFixed(2).replace('.',',')}.`    
    
}