let a = document.querySelector('#A')
let b = document.querySelector('#B')
let c = document.querySelector('#C')

let res = document.querySelector('#res')
let res1 = document.querySelector('#res1')
let res2 = document.querySelector('#res2')
let res3 = document.querySelector('#res3')
let res4 = document.querySelector('#res4')
let res5 = document.querySelector('#res5')

a.focus()

function ajusta() {
    res1.style.marginLeft = "400px"
    res1.style.textAlign = "left"
    res2.style.marginLeft = "400px"
    res2.style.textAlign = "left"
    res3.style.marginLeft = "400px"
    res3.style.textAlign = "left"
    res4.style.marginLeft = "400px"
    res4.style.textAlign = "left"
    res5.style.marginLeft = "400px"
    res5.style.textAlign = "left"
}
function calcular() {

    let A = Number(a.value).toFixed(3)
    let B = Number(b.value).toFixed(3)
    let C = Number(c.value).toFixed(3)      

    let ATR = (A*C/2).toFixed(3)
    let AC = (2*3.14159*C).toFixed(3)  
    let AT = (0.5*(Number(A)+Number(B))*C).toFixed(3)
    let AQ = (B*B).toFixed(3)
    let AR = (A*B).toFixed(3)

    ajusta()

    res1.innerHTML = `Info a) A área do triângulo retângulo que tem base ${A} e altura ${C} é ${ATR}.`
    res2.innerHTML = `Info b) A área do círculo de raio ${C} (pi = 3,14159) é ${AC}.`
    res3.innerHTML = `Info c) A área do trapézio que tem ${A} e ${B} por bases e ${C} por altura é ${AT}.`
    res4.innerHTML = `Info d) A área do quadrado que tem lado ${B} é ${AQ}.`
    res5.innerHTML = `Info e) A área do retângulo que tem lados ${A} e ${B} é ${AR}.`

    a.focus()
    a.value=''
    b.value=''
    c.value=''
}