import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Navbar extends React.Component{
    render(){
        return(
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>              
                <Link to='/'>
                    <img src='images/logo.png' alt="store" width="70" height="70"></img>
                </Link>
                <ul className='navbar-nav align-items-center'>                    
                    <li className='nav-item ml-5'>
                        <Link to='/products' className='nav-link'>Catalogo</Link>                           
                    </li>                   
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className='fa fa-cart-plus' />
                        </span>
                        Carrito
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--colorNav);
.nav-link{
    color: var(--blanco) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;