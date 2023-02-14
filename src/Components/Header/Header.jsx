import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
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
        <Container fluid>
        <Row>
            <Col xs={24} md= {12}>
            <header className="header">
            <p className='wordlogo'>
                MobileStore
            </p>
            <div>
                <Link className='wordheader' to="/">Inicio</Link>
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
            </Col>
        </Row>
        </Container>

    )
}

export default Header