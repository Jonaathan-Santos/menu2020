import './Product.css';
import {IonAvatar} from '@ionic/react';
import {useDispatch} from 'react-redux'


interface ContainerProps {
  item: any;
  

}

const Product: React.FC<ContainerProps> = ({ item}) => {
  
  const dispatch = useDispatch()

  return (
    <div className="container-product" onClick={()=>{
      dispatch({type: 'ACTIVE', payload: item})
    }} >

      <div className="product">

        <div className='content-product'>
          <span className='title-product'>
            {item.tituloOriginal}
          </span>
          <span className='desc-product'>
            {item.descricao}
          </span>


        </div>
        <IonAvatar>
        <img className='foto-product' src={"./assets/imgproduct.jpg"} alt="" />
        </IonAvatar>
      </div>
    
      <div className="content-valor-product">
        <span className="promocional-valor-product">
          {` R$ ${item.valores.promocional} `.replace(".",",")}
        </span>
        <span className="valor-product">
          {`R$ ${item.valores.valor}`.replace(".",",")}
        </span>
      </div>
        
    

      
        
        
    </div>
  );
};

export default Product;