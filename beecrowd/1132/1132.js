let res = document.querySelector('#res')

let X = 11
let Y = 10
let aux0 = 0
let soma = 0

if (X > Y) {
    aux0 = X
    X = Y
    Y = aux0
}

function fazer() {

    let aux1 = Y

    while (aux1 >= X) {

        if (aux1 % 13 != 0) {
            soma += aux1
        }

        aux1--
    }
    res.innerHTML = soma
}