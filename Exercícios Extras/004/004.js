let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Alice e Bia criaram uma página na Internet com informações sobre o Macaco-prego-de-peito-amarelo, uma espécie em extinção. A página mostra como todos podem ajudar a manter o habitat natural para evitar que a espécie seja extinta. Uma empresa gostou tanto da iniciativa de Alice e Bia que prometeu doar um prêmio para que as duas amigas possam realizar outras iniciativas semelhantes. A empresa decidiu que o prêmio seria dado quando a soma do número de acessos à página chegasse a 1 milhão. Dada a lista de acessos diários que ocorreram à página de Alice e Bia, escreva um programa para determinar quantos dias foram necessários para a soma dos acessos chegar a 1 milhão e as amigas ganharem o prêmio. Entrada: A primeira linha da entrada contém um número inteiro N, que indica o número de dias que a lista contém. Cada uma das linhas seguintes contém um único inteiro A, o número de acessos em um dia. O primeiro número dado indica o número de acessos no primeiro dia, o segundo número dado indica o número de acessos no segundo dia, e assim por diante. Saída: Seu programa deve escrever na saída uma única linha, contendo um único número inteiro, o número de dias que foram necessários para a soma dos acessos à pagina de Alice e Bia chegar a 1000000. Restrições 1<=N<=10^3 ou seja, a lista tem no máximo 1000 números; 0<=A<=10^6, ou seja, cada inteiro A da lista é positivo e menor do que ou igual a 1 milhão. A soma de todos os valores A da lista é maior do que ou igual a 1 milhão (ou seja, Alice e Bia certamente ganham o prêmio). Observar que esse é o exercício de número 013 do Neps.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let array = []
    let sum = 0

    for (let i = 0; sum < 1000000; i++) {
        array.push(Math.floor(Math.random() * (1000000 - 0 + 1)))
        sum += array[i]
    }

    output1.innerHTML = `A soma de 1.000.000 de acessos foi atingida em ${array.length} dias.`
    output2.innerHTML = `Os números gerados aleatoriamente pelo sistema são: ${array}.`
}

// Nesse exercício, ao invés de obtermos entradas para o número de acessos de cada dia, incluímos uma função que gera números aleatoriamente para isso. A solução manual seria incluir uma função que obtivesse o valor desses acessos a cada vez que apertasse um botão, por exemplo.