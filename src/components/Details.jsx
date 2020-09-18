import React from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {id, company, img, info, price, title, inCart} =  value.detailProduct;
                    return(
                        <div className='container py-5'>
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-18 mx-auto col-md-6 my-3">
                                    <img src={img} alt="foto" className='img-fluid'/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>Modelo: {title}</h4>
                                    <h5>Marca: {company}</h5>
                                    <h6 className='text-blue'>
                                        <strong>
                                            Precio: <span>$</span> {price}
                                        </strong>
                                    </h6>
                                    <p className='text-capitalize.font-weight-bold.mt-3.mb-0'>
                                        Info:
                                    </p>
                                    <p className='text-muted lead'>{info}</p>
                                    <Link to='/products'>
                                        <ButtonContainer>
                                            Volver a tienda
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer 
                                        cart
                                        disabled={inCart ? true : false} 
                                        onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }
                                    }>
                                        {inCart ? 'En carrito': 'agregar al carrito'}
                                    </ButtonContainer>
                                </div>                               
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}