import GetPlantio from "./getPlantio"
import GetProducao from "./getProducao"
import GetProdutos from "./getProdutos"


function GetEntradas() {
    let plantioList = []
    plantioList = GetPlantio(plantioList)

    let productList = []
    productList = GetProdutos(productList)

    let producaoList = []
    producaoList = GetProducao(producaoList)

    
}