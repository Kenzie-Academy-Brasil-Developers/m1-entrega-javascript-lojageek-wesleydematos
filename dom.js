let secaolistPaintings = document.getElementsByClassName('paintings')[0]
let secaolistFigure = document.getElementsByClassName('action_figures')[0]

function listarItens (arrayDeItens){
    for(let i = 0; i < arrayDeItens.length; i++){
        let itemDaLista = arrayDeItens[i]
        console.log(itemDaLista)
        /*let card = criarCardItem(itemDaLista)

        secaolistPaintings.appendChild(card)*/
    }
}

/*function criarCardItem (itemDaLista){
    let imagem        = itemDaLista.imagem
    let nome          = itemDaLista.nome
    let valor         = itemDaLista.valor
    
    let tagLi       = document.createElement("li")
    let tagImg      = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("span")

    tagImge.classList.add("imagemProduto")

    tagImg.src           = imagem
    tagImge.alt          = ""
    tagNome.innerText    = nome
    tagPreco.innerText   = valor

    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}*/