let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Joãozinho acaba de mudar de escola e a primeira coisa que percebeu na nova escola é que a gangorra do parquinho não é simétrica, uma das extremidades é mais longa que a outra. Após brincar algumas vezes com um amigo de mesmo peso, ele percebeu que quando está em uma extremidade, a gangorra se desequilibra para o lado dele (ou seja, ele fica na parte de baixo, e o amigo na parte de cima), mas quando eles trocam de lado, a gangorra se desequilibra para o lado do amigo. Sem entender a situação, Joãozinho pediu ajuda a outro amigo de outra série, que explicou que o comprimento do lado interfere no equilíbrio da gangorra, pois a gangorra estará equilibrada quando P1xC1 = P2xC2 onde P1 e P2 são os pesos da criança no lado esquerdo e direito respectivamente, e C1 C2 são os comprimentos da gangorra do lado esquerdo e direito, respectivamente. Com a equação, Joãozinho já consegue dizer se a gangorra está equilibrada ou não mas, além disso, ele quer saber para qual lado a gangorra descerá caso esteja desequilibrada. Seu programa deve produzir uma única linha, contendo um único inteiro. Se a gangorra estiver equilibrada, imprima "0". Se ela estiver desequilibrada de modo que a criança esquerda esteja na parte de baixo, imprima "-1", senão, imprima "1". Atentar que este é o exercício 012 do Neps.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let inputD = document.querySelector('#inputD')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

let situation = ""
let resultado = ""

function fazer() {

    let P1 = inputA.value
    let C1 = inputB.value
    let P2 = inputC.value
    let C2 = inputD.value

    if (P1 < 10 || P1 > 100 || C1 < 10 || C1 > 100 || P2 < 10 || P2 > 100 || C2 < 10 || C2 > 100) {
        alert('[ERRO] Informações inválidas! Os valores dos pesos e dos comprimentos devem estar entre 10 e 100.')
    } else {
        if (Number(inputA.value) * Number(inputB.value) === Number(inputC.value) * Number(inputD.value)) {
            situation = "equilibrada"
            resultado = 0
        } else {
            situation = "desequilibrada"
            if (inputA.value * inputB.value > P2 * C2) {
                resultado = -1
            } else {
                resultado = 1
            }
        }
        output1.innerHTML = `A gangorra está, ${situation}. Resultado: ${resultado}.`
    } 
}