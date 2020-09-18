import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends React.Component{
    render(){
        return(
            <section className='cart-container'>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                    if(cart.length > 0){
                       return(
                        <React.Fragment>
                            <Title name="Tu " title="carrito" />
                            <CartColumns /> 
                            <CartList value={value} /> 
                            <CartTotals value={value} />
                        </React.Fragment>
                       );
                    }
                    else{
                        return(
                        <EmptyCart />
                        );
                    }
                    }}
                </ProductConsumer>                           
            </section>
        );
    }
}