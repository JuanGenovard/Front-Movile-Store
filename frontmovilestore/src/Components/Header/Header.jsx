import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
function Header() {
    return (
        <header className="header">
            <img src="https://thumbs.dreamstime.com/b/logotipo-de-tel%C3%A9fonos-m%C3%B3viles-conexi%C3%B3n-smartphone-como-icono-archivo-vectorial-incluido-176710275.jpg" alt="" height="70" />
            <div>
                <Link className='wordheader' to="/">Home</Link>
                <Link className='wordheader' to="/login">Login</Link>
                <Link className='wordheader' to="/register">Resgister</Link>
                <Link className='wordheader' to="/movil">Mobiles</Link>
                <Link className='wordheader' to="/settings">Settings</Link>
                {/* <Link className='wordheader' to="/compras"> Compras</Link> */}
            </div>
        </header>
    )
}

export default Header