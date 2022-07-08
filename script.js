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

function createPaintingItem(imagemItem, nomeItem, valorItem){
    let item = {
        imagem: imagemItem,
        nome: nomeItem,
        valor: valorItem,
    }
    listPainting.push(item)
    return listPainting
}
