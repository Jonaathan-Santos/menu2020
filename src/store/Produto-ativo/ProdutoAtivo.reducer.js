
const productDefalt = {
    classificacao: "",
    ativo: true,
    tituloOriginal: "",
    titulo: "",
    paginaInicial: true,
    subTitulo: "",
    promocao: true,
    descricao:
      "",
    valores: {promocional: 0, valor: 0 },
    midias: [{ midia: "./assets/imgproduct.jpg" }],
}

export default function (state = {isActive: false, produtoActive: {
    classificacao: "",
    ativo: true,
    tituloOriginal: "",
    titulo: "",
    paginaInicial: true,
    subTitulo: "",
    promocao: true,
    descricao:
      "",
    valores: {promocional: 0, valor: 0 },
    midias: [{ midia: "./assets/imgproduct.jpg" }]
}}, action){

    switch (action.type) {
        case 'ACTIVE':
            
            return {isActive: true, produtoActive: action.payload}

        case 'DESABLE':

            return {isActive: false, produtoActive: productDefalt}
    
        default:
            return state
    }


}