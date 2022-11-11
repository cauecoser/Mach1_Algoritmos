let A = document.querySelector('#raio')
let res = document.querySelector('#res')

function calcular() {

    let raio = A.value
    let vol = ((4 / 3) * 3.14159) * Math.pow(raio, 3)
    res.innerHTML = `O volume da esfera com raio ${raio}m é ${vol.toFixed(3).replace(',', '.')}m³.`
}