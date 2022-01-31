import {IonAvatar, IonSlide, IonSlides, IonTextarea, IonIcon} from '@ionic/react'
import {arrowBack, people,time,bagHandle} from 'ionicons/icons'
import './Details.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'




interface ContainerProps {
    isActive: boolean;
    product: any;

}
const Details: React.FC<ContainerProps> = ({isActive, product}) =>{
    
    const slideOpts = {
        initialSlide: 0,
        slidesPerView: 1,
        loop: true,
        speed: 400,
    };
    const dispatch = useDispatch()
    const valor: number = product.promocao? product.valores.promocional: product.valores.valor
    
    const [observacao, setObservacao] = useState<string>('')
    const [quantidade, setQuantidade] = useState<number>(1)
    let total = quantidade * valor

    let clases = isActive ? ' details show': "details"


 return(


    <div className={clases}>
        <div 
            className="back-btn"
            onClick={()=>{
                dispatch({type: 'DESABLE'}) 
                
            }}
        >
            <IonIcon ios={arrowBack} slot='start'></IonIcon>
        </div>
        
        <div className="Slides-details">
            <IonSlides pager={true} options={slideOpts}>

                {
                  product.midias.map((item: any, index: number) =>{
                    return(
                      <IonSlide key={index}>
                        <IonAvatar>
                            <img src={item.midia} alt="" />
                        </IonAvatar>
                      </IonSlide>

                    )
                  })
                }
            </IonSlides>
        </div>
        <div className="content-details">
            <span className="sub-titulo-details">{product.subTitulo}</span>
            <span className="titulo-details">{product.tituloOriginal}</span>
            <div className="info-details">
                <div className="info-details-content">
                    <span className="info-details">{"serve 2 pessoas"}</span>
                    <IonIcon ios={people} md={people}></IonIcon>
                </div>
                <div className="info-details-content">
                    <span className="info-details">{'40 min'}</span>
                    <IonIcon ios={time}></IonIcon>
                </div>
            </div>
            <span className="descricao-details">{product.descricao}</span>
            <span className='valor-details'>{'R$ '+`${valor}`.replace('.',',') }</span>
            <div className="text-area">
                <span className="observacao">Observação</span>
                <IonTextarea
                    value={observacao}
                    onIonChange={e => setObservacao(e.detail.value!)}
                    inputMode='text'
                    maxlength={50}
                    mode='md'
                    placeholder="Obsercações"
                />
            </div>
            <div className="total-details">
                <span>Total</span>
                <span className='total-detail-valor'>{total}</span>
            </div>
            <div className="footer-details">
                <div className="quantidade-details">
                 <div 
                    className="btn-sub-details"
                    onClick={()=>{setQuantidade(quantidade == 1? quantidade: quantidade-1)}}
                 >-</div>
                 <div className="display-quantidade-details">{quantidade}</div>
                 <div 
                    className="btn-add-details" 
                    onClick={()=>{setQuantidade(quantidade+1)}}
                 >+</div>
                </div>
                <div className="btn-bag-details">
                    <IonIcon ios={bagHandle}></IonIcon>
                    <span>Adicionar</span>
                </div>
            </div>
            
            
        </div>
        

    </div>
 )

} 
export default Details