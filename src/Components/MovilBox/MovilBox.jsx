import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MovilBox.scss'


const MovilBox = ({ movil }) => {

    return (
        <div className='divmvlbox'>
            <Row>
                <Col xs={12} md={24}>
                    <Link className='card' to={`/movil/${movil.id_movil}`}>
                        <img className='imagen' src={movil.URL} alt="imagen" />
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p className='nombremvl'>{movil.nombre}</p>
                            <p className='nominfo'>{movil.color}</p>
                            <p className='nominfo'>{movil.precio}</p>
                        </div>

                    </Link>
                </Col>
            </Row>
        </div>




    );
};

export default MovilBox;