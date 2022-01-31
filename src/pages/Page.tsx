import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
IonSlide, IonSlides } from '@ionic/react';
import { useParams } from 'react-router';
import ProductList from '../components/productlist/ProductList';
import './Page.css';
import ProductPromo from '../components/roductPromo/ProductPromo';
import Details from '../components/amostra/Details';
import {useSelector} from 'react-redux';
import lista from '../lista'


let classificacoes = ["HAMBURGUER","BEBIDAS", "SOBREMESAS"]



const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const lista_de_produtos = useSelector((state: any) => state.produtos);
  const produto_ativo = useSelector((state: any) => state.produtoAtivo);

  console.log(produto_ativo)


  const slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    speed: 400,
    autoplay: { delay:3500,}
  };

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="Promocoes">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle >PROMOÇOES</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="Slides">
             <IonSlides pager={false} options={slideOpts}>

                {
                  lista_de_produtos.filter((item: any) => item.promocao  === true)
                  .map((item: any, index: number) => {
                    return(
                      <IonSlide key={index}>
                        <ProductPromo key={index} item={item}/>
                      </IonSlide>

                    )
                  })
                }
            </IonSlides>

          </div>
         
        </div>
        {
          classificacoes.map((item: any, index : number) => <ProductList key={index} classificacao={item}/>)
        }
        
        
      </IonContent>
      <Details isActive={produto_ativo.isActive} product={produto_ativo.produtoActive}/>
      
    </IonPage>
  );
};

export default Page;
