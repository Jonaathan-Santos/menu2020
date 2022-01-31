import lista from '../../lista'

export default function (state = lista, action){

    switch (action.type) {
        case 'GET_PRODUTOS':
            
            return action.payload

        default:
           return state
    }
}