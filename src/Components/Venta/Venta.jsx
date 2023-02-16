import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Resouces/congratulations.jpg'
import "./Venta.scss"

function Venta() {
    return (
        <Container className="contenhorabuena">
            <Row>
                <Col xs={12} md={24}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="" src={logo} alt="imagen" />
                    </div>
                    <div className="divenhorabuena d-flex justify-content-center align-items-center">
                        <p className="textenhorabuena"><br />
                            Acabas de comprar un magnifico<br />
                            movil al mejor precio.
                        </p>
                    </div>



                </Col>
            </Row>
        </Container>
    )
}

export default Venta;