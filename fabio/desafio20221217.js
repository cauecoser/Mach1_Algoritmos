const itemLista = document.getElementById("itemLista")
const tabelaItens = document.getElementById("tabelaItens")
const addLista = document.getElementById("addLista")
const limpaTabela = document.getElementById("limpaTabela")

addLista.addEventListener("click", adicionarLista)
itemLista.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarLista()
        e.preventDefault()
    }
})

limpaTabela.addEventListener("click", clearTable)

itemLista.focus()

let idItem = 0

function clearTable() {
    let confirma = confirm("[ATENÇÃO!!] Deseja realmente excluir a lista de compras atual?")
    if (confirma == true) {
        if (tabelaItens.innerText != "") {
            tabelaItens.innerHTML = ""
        } else {
            alert("Impossível excuir! Sua tabela já está vazia.")
        }
    }
}

function riscaTexto(x) { //Qustionar ao Fábio pq essa função pega um ibjeto do nada, se "x" não é passado (não é passado nenhum parâmetro em "riscaTexto" dentro de "adicionarLista()") // Além disso perguntar como eu adicionaria um transition nas linhas que são inseridas dinamicamente?
    if (x.srcElement.checked == true) {
        x.path[2].cells[1].style.textDecoration = "line-through"
    } else {
        x.path[2].cells[1].style.textDecoration = "none"
    }
}

function adicionarLista() {
    let nomeItem = itemLista.value

    // Checa se foi preenchido ao menos um caractere.
    if (nomeItem.length == 0) {
        alert('[ERRO] Você não pode adicionar um item em branco. Por favor, preencha ao menos um caractere para adicionar.')
    } else {

        // Criação dos elementos a serem adicinados na linha da tabela principal.
        const linhaHTML = document.createElement("tr")
        const colunaID = document.createElement("td")
        const colunaItem = document.createElement("td")
        const colunaQtd = document.createElement("td")
        const colunaCheck = document.createElement("td")

        // Criação do bloco que contém os botões e o calor da quantidade de itens (composição da coluna 3).
        const blocoQtd = document.createElement("div")
        blocoQtd.id = "blocoQtd"
        const menosQtd = document.createElement("button")
        menosQtd.id = "botaoMenos"
        menosQtd.className = "botao"

        const qtd = document.createElement("input")
        qtd.id = "qtd"
        const maisQtd = document.createElement("button")
        maisQtd.id = "botaoMais"
        maisQtd.className = "botao"

        maisQtd.innerHTML = "<strong>+</strong>"
        menosQtd.innerHTML = "<strong>-</strong>"
        qtd.value = 1

        // Composição do bloco que edita a quantidade de itens na coluna 3.
        blocoQtd.append(menosQtd)
        blocoQtd.append(qtd)
        blocoQtd.append(maisQtd)

        maisQtd.addEventListener("click", function somar() { qtd.value++ })
        menosQtd.addEventListener("click", function subtrair() { qtd.value-- })

        // Criação da checkbox da coluna 4 da linha.
        const cx = document.createElement("input")
        cx.type = "checkbox"
        cx.id = "cx" + (idItem + 1)

        // Composição da linha completa
        colunaID.innerHTML = ++idItem
        colunaItem.innerHTML = nomeItem
        colunaQtd.append(blocoQtd)
        colunaCheck.append(cx)

        cx.onchange = riscaTexto
        linhaHTML.style.transition = "2s"
        linhaHTML.append(colunaID)
        linhaHTML.append(colunaItem)
        linhaHTML.append(colunaQtd)
        linhaHTML.append(colunaCheck)

        // Inserção da linha na tabela principal
        tabelaItens.append(linhaHTML)

        // Zera o valor do input
        itemLista.value = ""
    }
}
