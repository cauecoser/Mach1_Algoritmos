let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'No Colégio Neps Academy (CNA) um aluno é aprovado por média se ele obtiver uma média final maior ou igual a 7, caso o aluno tenha uma média menor que 7 mas maior ou igual a 4 ele está de recuperação, caso ele tenha uma média menor que 4 o aluno está reprovado. A média é calculada com a nota das duas provas aplicadas no semestre e corresponde simplesmente a média aritimética das duas notas. Baseado nas duas notas do aluno, indique o resultado final do aluno: "Aprovado", "Reprovado" ou "Recuperacao".'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function muda() {
    let strInputA = inputA.value.toString().replace(',','.')  
    let strInputB = inputB.value.toString().replace(',','.')
    
    let media = (Number(strInputA)+Number(strInputB))/2
    
    let res = ""

    if (media>=7) {
        res="Aprovado"
    } else {
        if (media<=4) {
            res="Reprovado"
        } else {
            res="Recuperação"
        }
    }

    output1.innerHTML=`O aluno teve média ${media.toFixed(2)}. ${res}!`
}