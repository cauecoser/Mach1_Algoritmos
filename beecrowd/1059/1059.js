let res = document.querySelector('#res')

let X = 1
let Y = 100

let aux0 = 0
let soma = 0

if (X > Y) {
    aux0 = X
    X = Y
    Y = aux0
}

function fazer() {

    let aux1 = X
    let nums = ""
    while (aux1 <= Y) {

        if (aux1 % 2 == 0) {
            nums += aux1+" "
        }

        aux1++
    }
    res.innerHTML = nums
}