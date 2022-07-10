let listFigure = []
let listPainting = []
    
function createActionItem(imagemItem, nomeItem, valorItem){
    let item = {
        imagem: imagemItem,
        nome: nomeItem,
        valor: valorItem,
    }
    listFigure.push(item)
    return listFigure
}
createActionItem('./assets/img/actions/animewoman.jpg','Anime Woman','$ 100,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku','$ 150,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Baby Yoda','$ 200,00')
createActionItem('./assets/img/actions/animewoman.jpg','Anime Woman','$ 100,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku','$ 150,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Baby Yoda','$ 200,00')
createActionItem('./assets/img/actions/animewoman.jpg','Anime Woman','$ 100,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku','$ 150,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Baby Yoda','$ 200,00')
createActionItem('./assets/img/actions/animewoman.jpg','Anime Woman','$ 100,00')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku','$ 150,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Baby Yoda','$ 200,00')

function createPaintingItem(imagemItem, nomeItem, valorItem){
    let item = {
        imagem: imagemItem,
        nome: nomeItem,
        valor: valorItem,
    }
    listPainting.push(item)
    return listPainting
}
createPaintingItem('./assets/img/painting/clock.jpg','Clock','$ 200,00')
createPaintingItem('./assets/img/painting/gamepad.jpg','Game Pad','$ 100,00')
createPaintingItem('./assets/img/painting/personagem.jpg','Tin Man character','$ 300,00')
createPaintingItem('./assets/img/painting/clock.jpg','Clock','$ 200,00')
createPaintingItem('./assets/img/painting/gamepad.jpg','Game Pad','$ 100,00')
createPaintingItem('./assets/img/painting/personagem.jpg','Tin Man character','$ 300,00')
createPaintingItem('./assets/img/painting/clock.jpg','Clock','$ 200,00')
createPaintingItem('./assets/img/painting/gamepad.jpg','Game Pad','$ 100,00')
createPaintingItem('./assets/img/painting/personagem.jpg','Tin Man character','$ 300,00')
createPaintingItem('./assets/img/painting/clock.jpg','Clock','$ 200,00')
createPaintingItem('./assets/img/painting/gamepad.jpg','Game Pad','$ 100,00')
createPaintingItem('./assets/img/painting/personagem.jpg','Tin Man character','$ 300,00')

let secaolistPaintings = document.querySelector("ul.paintings")
let secaolistFigure = document.querySelector("ul.action_figures")

function listarProdutos(listaProdutos){
     for(let i = 0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i]
        let cardProduto    = criarCardProduto(produto)
        if(listaProdutos == listPainting){
            secaolistPaintings.appendChild(cardProduto)
        }
        else if(listaProdutos == listFigure){
            secaolistFigure.appendChild(cardProduto)
        }
    }
 }
 listarProdutos(listPainting)
listarProdutos(listFigure)

function criarCardProduto(produto){
    let imagemCard        = produto.imagem
    let nomeCard          = produto.nome
    let valorCard         = produto.valor

    let tagLi       = document.createElement("li")
    let tagImge     = document.createElement("img")
    let tagNome     = document.createElement("h2")
    let tagPreco    = document.createElement("span")

    tagImge.src          = imagemCard
    tagImge.alt          = nomeCard
    tagNome.innerText    = nomeCard
    tagPreco.innerText   = valorCard

    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}
    
