let problema = document.querySelector('#descriptionText')

problema.innerHTML = 'Parte do treinamento de um novo garçom é carregar uma grande bandeja com várias latas de bebidas e copos e entregá-las todas numa mesa do restaurante. Durante o treinamento é comum que os garçons deixem cair as bandejas, quebrando todos os copos. A SBC -- Sociedade Brasileira de Copos -- analisou estatísticas do treinamento de diversos garçons e descobriu que os garçons em treinamento deixam cair apenas bandejas que têm mais latas de bebidas que copos. Por exemplo, se uma bandeja tiver 10 latas e 4 copos, certamente o garçom em treinamento a deixará cair, quebrando os 4 copos. Já se a bandeja tiver 5 latas e 6 copos, ele conseguirá entregá-la sem deixar cair. Escreva um programa que, dado o número de latas e copos em cada bandeja que o garçom tentou entregar, imprime o total de copos que ele quebrou. Entrada: A primeira linha da entrada contém um inteiro N representando o número de bandejas que o garçom tentou entregar. As N linhas seguintes representam as NN bandejas. Cada linha contém dois inteiros L e C, indicando o número de latas e o número de copos naquela bandeja, respectivamente. Saída: Seu programa deve imprimir uma única linha, contendo um único inteiro, indicando o número total de copos que o garçom quebrou. Restrições: 1<=N<=100 0<=L,C<=100. OBS.: Nesse exemplo utilizaremos a criação dinâmica de inputs para inserção da quantidade de copos e latas de cada bandeja, bem como realizaremos pequenas mudanças no código modelo para melhor solução do exercício.'

let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')
let output1 = document.querySelector('#output1')
let output2 = document.querySelector('#output2')
let output3 = document.querySelector('#output3')

// A lógica começa aqui.

let lc = document.querySelector('#lc')
let contbtn = document.querySelector('#contbtn')

let N = null

function fazer() {
    
    lc.innerHTML=""
    N = inputA.value

    for(i=0;i<N;i++) {

        let cont = document.createElement('div')
        cont.setAttribute('class', 'cont')
        
        let C = document.createElement('input')
        C.setAttribute('placeholder', 'Número de copos da bandeja '+(i+1))
        C.setAttribute('id', 'copo'+(i+1))
        let L = document.createElement('input')
        L.setAttribute('placeholder', 'Número de latas da bandeja '+(i+1))
        L.setAttribute('id', 'lata'+(i+1))
        
        cont.appendChild(C)
        cont.appendChild(L)

        lc.appendChild(cont)
    }
    let btn = document.createElement('button')
    btn.innerText = 'Calcular Copos Quebrados'
    btn.setAttribute('onclick', 'doIt()')
    contbtn.appendChild(btn)
}

function doIt() {

    let S = 0
    
    let CO = 0
    let LA = 0

    for(i=0;i<N;i++){
        
        CO = Number(document.querySelector('#copo'+(i+1)).value)
        LA = Number(document.querySelector('#lata'+(i+1)).value)

        if(LA>CO){
            S += CO
        }
    }
    
    output1.innerHTML = `O garçom em treinamento quebrou, no total, ${S} copos.`
}