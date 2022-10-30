let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Você está de volta em seu hotel na Tailândia depois de um dia de mergulhos. O seu quarto tem duas lâmpadas. Vamos chamá-las de A e B. No hotel há dois interruptores, que chamaremos de I1 e I2. Ao apertar I1, a lâmpada A acende se estiver apagada, e apaga se estiver acesa. Se apertar I2, cada uma das lâmpadas A e a B troca de estado: se estiver apagada, fica acesa e se estiver acesa apaga. As lâmpadas inicialmente estão ambas apagadas. Seu amigo resolveu bolar um desafio para você. Ele irá apertar os interruptores em uma certa sequência, e gostaria que você respondesse o estado final das lâmpadas A e B. Entradas: A primeira linha contém um número N que representa quantas vezes seu amigo irá apertar algum interruptor. Na linha seguinte seguirão N números, que pode ser 1, se o interruptor I1 foi apertado, ou 2, se o interruptor I2 foi apertado. Saída: Seu programa deve imprimir dois valores, em linhas separadas. Na primeira linha, imprima 1 se a lâmpada A estiver acesa no final das operações e 0 caso contrário. Na segunda linha, imprima 1 se a lâmpada B estiver acesa no final das operações e 0 caso contrário. Restrições: 2<=N<=10^5. Atentar que este é o exercício 014 do Neps'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

function fazer() {

    let N = inputA.value
    array = []
    let A = false
    let B = false

    for (i = 0; i < N; i++) {
        array.push(parseInt(Math.random()*(3-1) + 1))
            if (array[i] === 1) {
            A = A !== true
        } else {
            A = A !== true
            B = B !== true
        }
    }
    
    if(A==1){statusA="acesa"}else{statusA="apagada"}
    if(B==1){statusB="acesa"}else{statusB="apagada"}

    output1.innerHTML = `A lâmpada "A" está ${statusA}.`
    output2.innerHTML = `A lâmpada "B" está ${statusB}.`
    output3.innerHTML = `A sequência de pressionamentos foi ${array}.`
}