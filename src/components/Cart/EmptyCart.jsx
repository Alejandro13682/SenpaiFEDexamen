import React from 'react';
import {Link} from 'react-router-dom';

export default function EmptyCart(){
    return(
        <div className='container mt-5'>
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Tu carrito esta vacio</h1>
                    <Link to='/products'>
                    <span>Volver a la tienda</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}