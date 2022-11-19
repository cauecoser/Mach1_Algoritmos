let linkText = document.querySelector('#linkText')
let link = document.querySelector('#link')
let titulo = document.querySelector('#titulo')
let cabeca = document.querySelector('#cabeca')

link.href = linkText.innerHTML = 'https://neps.academy/br/exercise/45'
titulo.innerHTML = cabeca.innerHTML = 'Torre'

let inputA = document.querySelector('#inputA')
// let inputB = document.querySelector('#inputB')
// let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.


function fazer() {

    let N = parseInt(inputA.value)
    let arrayDeElementos = []
    let arrayDeLinhas = []
    let linha = 2
    let coluna = 1
    let somaLinha = 0
    let somaColuna = 0
    let peso = 0

    for (j = 1; j <= N; j++) {
        arrayDeElementos = []
        for (i = 1; i <= N; i++) {
            let elemento = Math.floor(Math.random() * 10)
            arrayDeElementos.push(elemento)
        }
        arrayDeLinhas.push(arrayDeElementos)
    }

    let centro = Number(arrayDeLinhas[linha][coluna])

    for (let col = 0; col < N; col++) {
        auxC = Number(arrayDeLinhas[linha][col])
        somaLinha += auxC
        pesoLinha = somaLinha-centro
    }

    for (let lin = 0; lin < N; lin++) {
        auxL = Number(arrayDeLinhas[lin][coluna])
        somaColuna += auxL
        pesoColuna = somaColuna-centro
    }
    
    if (pesoLinha>pesoColuna) {
        peso = pesoLinha
    } else {
        peso = pesoColuna
    }
    
    output1.innerHTML = `A matriz formada é ${arrayDeLinhas}`
    output2.innerHTML = `O número no cruzamento entre a linha ${linha} e a coluna ${coluna} é ${centro}`
    output3.innerHTML = `A soma dos elementos fora do cruzamento na linha é ${pesoLinha} e na coluna é ${pesoColuna}. portanto, o maior peso é ${peso}!`
}