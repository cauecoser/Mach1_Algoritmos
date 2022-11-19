let res = document.querySelector('#res')

let X = 10
let Y = 18

let aux0 = 0
let soma = 0

if (X > Y) {
    aux0 = X
    X = Y
    Y = aux0
}

function fazer() {

    let aux1 = X+1
    let nums = ""
    while (aux1 < Y) {

        if (aux1 % 5 == 2 || aux1 % 5 == 3) {
            nums += aux1+" "
        }

        aux1++
    }
    res.innerHTML = nums
}