import "./ProductList.css"
import {
    IonHeader,
    IonToolbar,
    IonTitle
} from '@ionic/react'
import Product from '../product/product'
import {useSelector} from 'react-redux'


interface ContainerProps {
    classificacao: string;
}



const ProductList: React.FC<ContainerProps> = ({classificacao}) => {

    const lista_de_produtos = useSelector((state: any) => state.produtos)
    console.log(lista_de_produtos)

    return(
        <div className="productList">
        
            <IonHeader>
                <IonToolbar color="primary">
                <IonTitle >{classificacao}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className="Slides">
                

                {
                    lista_de_produtos.filter((item: any) => item.classificacao  === classificacao)
                    .map((item: any, index: number) => {
                        return(
                            <Product key={index} item={item}/>
                        )
                    })
                }
            

            </div>
         
        </div>
        
    )
}

export default ProductList

