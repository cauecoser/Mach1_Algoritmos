const itemLista = document.getElementById("itemLista")
const tabelaItens = document.getElementById("tabelaItens")
let idItem = 0

function adicionarLista() {
    let nomeItem = itemLista.value
    const linhaHTML = document.createElement("tr")
    const colunaID = document.createElement("td")
    const colunaItem = document.createElement("td")
    const colunaQtd = document.createElement("td")
    const colunaCheck = document.createElement("td")
    
    const blocoQtd = document.createElement("div")
    blocoQtd.id = "blocoQtd"
    const menosQtd = document.createElement("button")
    menosQtd.id = "botaoMenos"
    menosQtd.className = "botao"
    const maisQtd = document.createElement("button")
    maisQtd.id = "botaoMais"
    maisQtd.className = "botao"
    const qtd = document.createElement("input")
    qtd.id = "qtd"
    
    maisQtd.innerHTML = "<strong>+</strong>"
    menosQtd.innerHTML = "<strong>-</strong>"
    qtd.value = 0
    
    const caixinha = document.createElement("input")
    caixinha.type = "checkbox"
    
    blocoQtd.append(menosQtd)
    blocoQtd.append(qtd)
    blocoQtd.append(maisQtd)

    maisQtd.addEventListener("click", function somar() {qtd.value++})
    menosQtd.addEventListener("click", function subtrair() {qtd.value--})
    // caixinha.addEventListener("mouseenter", function fazer() {alert("OK")})

    colunaID.innerHTML = ++idItem
    colunaItem.innerHTML = nomeItem
    colunaQtd.append(blocoQtd)
    colunaCheck.append(caixinha)

    linhaHTML.append(colunaID)
    linhaHTML.append(colunaItem)
    linhaHTML.append(colunaQtd)
    linhaHTML.append(colunaCheck)

    itemLista.value = ""

    tabelaItens.append(linhaHTML)

}
