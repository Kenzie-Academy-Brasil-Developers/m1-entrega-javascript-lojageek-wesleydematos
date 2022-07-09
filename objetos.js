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
