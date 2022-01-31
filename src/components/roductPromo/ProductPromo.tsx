import './ProductPromo.css'
import{ useDispatch} from 'react-redux'


interface ContainerProps {

    item: any;
}

const ProductPromo: React.FC <ContainerProps> = ({item}) =>{
    const dispatch = useDispatch()
    
    return(
        <div className="Product" onClick={() => {
            dispatch({type: 'ACTIVE', payload: item})
        }}>
            <div className="img">
                <img src={"./assets/imgproduct.jpg"} alt="" />
            </div>
            <div className="content">
                <span className="name">
                    {item.tituloOriginal}
                </span>
                <div className="valor">
                    R$: {item.valores.valor}
                </div>
                <div className="promo">
                    R$: {item.valores.promocional}
                </div>

            </div>
        </div>
    )
} 

export default ProductPromo