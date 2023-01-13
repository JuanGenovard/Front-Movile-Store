import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Resouces/congratulations.jpg'

function Venta() {
    return (
        <Container>
            <Row className="d-flex justify-content-center -aling-items-center">
                <Col className="d-flex justify-content-center -aling-items-center">
                    <h1 className="d-flex justify-content-center -aling-items-center">Enhorabuena,<br />
                     acabas de comprar un magnifico<br />
                      movil al mejor precio.</h1>
                      <img className="d-flex justify-content-center -aling-items-center" src={logo} alt="imagen" />
                </Col>
            </Row>
        </Container>
    )
}

export default Venta;