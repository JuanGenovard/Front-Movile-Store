import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss'
function Header() {
    const navigate = useNavigate()
    const username = localStorage.getItem('username');
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

    const handleClick = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <header className="header">
            <img src="https://thumbs.dreamstime.com/b/logotipo-de-tel%C3%A9fonos-m%C3%B3viles-conexi%C3%B3n-smartphone-como-icono-archivo-vectorial-incluido-176710275.jpg" alt="" height="70" />
            <div>
                <Link className='wordheader' to="/">Home</Link>
                {username
                    ? (
                        <>
                            <Link className='wordheader' to="/movil">Moviles</Link>
                            <Link className='wordheader' to="/settings">Opciones</Link>
                            <button onClick={handleClick}>Cerrar Sesión</button>
                        </>
                    )
                    : (
                        <>
                            <Link className='wordheader' to="/login">Iniciar Sesión</Link>
                            <Link className='wordheader' to="/register">Registrarse</Link>
                        </>
                    )
                }
                {isAdmin
                    && (
                        <>
                            <Link className='wordheader' to="/compras"> Compras</Link>
                        </>
                    )
                }

            </div>
        </header>
    )
}

export default Header