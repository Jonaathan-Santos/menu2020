import {createStore, combineReducers} from 'redux'
import produtosReducer from './Produtos/Produtos.reducer'
import ProdutoAtivo from './Produto-ativo/ProdutoAtivo.reducer'


const rootReducer = combineReducers({
    produtos: produtosReducer,
    produtoAtivo: ProdutoAtivo

})

const store = createStore(rootReducer)

export default store