import React from 'react';
import Product from './Product';
import Title from '../components/Title';
import {ProductConsumer} from '../Context';

export default class ProductList extends React.Component{    
    render(){
        
        return(
            <React.Fragment>
            <div className='py-5'>
                <div className='container'>
                        <Title name='Nuestro ' title='catalogo'/>
                    <div className='row'>
                        <ProductConsumer>
                            {value=>{
                                return value.products.map(product =>{
                                    return <Product key={product.id} product={product} />
                                });

                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
            </React.Fragment>
            
        );
    }
}