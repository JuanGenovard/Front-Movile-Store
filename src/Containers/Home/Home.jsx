import React from 'react'
import logo from '../../Resouces/movil1.webp'
import './Home.scss'
import logo2 from '../../Resouces/mujer-con-movil.webp'
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
        <Col sm={12} md={6} className="coltext d-flex flex-column justify-content-center align-items-center">
          <Col sm={12} md={6} className='divtext2 d-flex justify-content-center align-items-center'>
            <Link className='wordlogin' to='/login'> <h4>Iniciar Sesión</h4></Link>
          </Col>
          <div className='divtext2 d-flex justify-content-center align-items-center'>
            <Link className='wordlogin' to='/register'> <h4>Registrarse</h4></Link>
          </div>
        </Col>
      </Row>
        <Row>
          <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <img className='imagenes' src={logo3} alt="imagen" />
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
            <img className='imagenes' src={logo3} alt="imagen" />
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