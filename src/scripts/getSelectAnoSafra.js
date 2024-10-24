function GetSelectAnoSafra(entradascliente, getSelectSafra) {
    let anosafra = []
    let anosafranew= []
    let arrayanosafra = []
    anosafra = entradascliente.map(entrada => {
        let anosafravalue = entrada.ano_safra
        if (anosafravalue != anosafranew)  {
            anosafranew = anosafravalue
            arrayanosafra.push(anosafranew)
        }
    })

    function unique(value, index, self) {
        return  self.indexOf(value) === index;
    }

    anosafra = arrayanosafra.filter(unique)

    anosafra.sort()

    let newanosafra = [] 
    
    anosafra.forEach((item, index) => {
        newanosafra[index] = {ano_safra: item}
    })

    getSelectSafra = newanosafra

    return getSelectSafra
}

export default GetSelectAnoSafra