import React from 'react'
import logo from '../../Resouces/camara-moviles.jpg'
import './Home.scss'
import logo2 from '../../Resouces/nokia-moviles-k3TB--1248x698@abc.jpg'
import logo3 from '../../Resouces/1605555641_363320_1605556525_noticia_normal.jpg'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


function Home() {
  return (
      <Container>
      <Row>
        <Col sm={12} md={6}  className="titulocol d-flex justify-content-center align-items-center">
          <div className='mobile'>Mobile</div>
          <div className='store'>Store</div>
        </Col>
      </Row>
      <Row className="text-center">
          <Col sm={12} md={6} className='divtext1 d-flex justify-content-center align-items-center text'>
            ¡Estás en MobileStore,<br />
            la mejor web dedicada al<br />
            reacondicionado!
        </Col>
      </Row>
        <Row>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <img className='imagenes' src={logo} alt="imagen" />
          </Col>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <h4> En nuestra MobilStore encontrarás<br />
              una gran variedad de móviles de<br />
              alta gama a un precio increíble.</h4>
          </Col>
        </Row>
        <Row>
 
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <h4> Cómprate un móvil reacondicionado<br />
               al mejor precio y al mismo tiempo <br />
               cuida el medio ambiente.</h4>
          </Col>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <img className='imagenes' src={logo2} alt="imagen" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <img className='imagenes' src={logo3} alt="imagen" />
          </Col>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <h4> También contamos con un gran<br />
             soporte técnico y una garantía<br />
              de hasta dos años.</h4>
          </Col>
        </Row>
      </Container>

  )
}

export default Home;