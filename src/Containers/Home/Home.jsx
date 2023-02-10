import React from 'react'
import logo from '../../Resouces/mobile-phone-gac1d22344_640.jpg'
import './Home.scss'
import logo2 from '../../Resouces/miniature-g383ed1876_640.jpg'
import logo3 from '../../Resouces/smartphone-g553f5a3c3_640.jpg'
import logo4 from '../../Resouces/camara-moviles.jpg'
import logo5 from '../../Resouces/368828.jpg'
import logo6 from '../../Resouces/nokia-moviles-k3TB--1248x698@abc.jpg'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <Container fluid className='conthome'>
      <Row>
        <Col xs={24} md={12} className='coltextimg'>
          <div className='divtext d-flex justify-content-center align-items-center'>
            <h3 className='ptext'>
              ¿En busca de un movil?
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12} className='coltextimg'>
          <div className="divcarousel">

            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block imghome"
                  src={logo2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imghome"
                  src={logo2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block imghome"
                  src={logo3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='coltextimg'>
          <div className='textoimagen d-flex justify-content-center align-items-center'>
            <p>
              ¿Te preocupa nuestro planeta? Entonces estas <br />
              en la página adecuada para comprar un dispositivo<br />
              respetuoso con el medio ambiente.
            </p>
          </div>
        </Col>
        <Col  className='coltextimg'>
          <div className='imagentexto d-flex justify-content-center align-items-center'>
          <img className='imagenes' src={logo4} alt="first slice" />
          </div>
        </Col>
      </Row>
      <Row>

        <Col  className='coltextimg'>
          <div className='imagentexto d-flex justify-content-center align-items-center'>
          <img className='imagenes' src={logo5} alt="first slice" />
          </div>
        </Col>
        <Col className='coltextimg'>
          <div className='textoimagen d-flex justify-content-center align-items-center'>
            <p>
              ¿Te preocupa nuestro planeta? Entonces estas <br />
              en la página adecuada para comprar un dispositivo<br />
              respetuoso con el medio ambiente.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='coltextimg'>
          <div className='textoimagen d-flex justify-content-center align-items-center'>
            <p>
              ¿Te preocupa nuestro planeta? Entonces estas <br />
              en la página adecuada para comprar un dispositivo<br />
              respetuoso con el medio ambiente.
            </p>
          </div>
        </Col>
        <Col className='coltextimg'>
          <div className='imagentexto d-flex justify-content-center align-items-center'>
          <img className='imagenes' src={logo6} alt="first slice" />
          </div>
        </Col>
      </Row>
    </Container>






    // <Container>
    // <Row>
    //   <Col sm={12} md={6}  className="titulocol d-flex justify-content-center align-items-center">
    //     <div className='mobile'>Mobile</div>
    //     <div className='store'>Store</div>
    //   </Col>
    // </Row>
    // <Row className="text-center">
    //     <Col sm={12} md={6} className='divtext1 d-flex justify-content-center align-items-center text'>
    //       ¡Estás en MobileStore,<br />
    //       la mejor web dedicada al<br />
    //       reacondicionado!
    //   </Col>
    // </Row>
    //   <Row>
    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <img className='imagenes' src={logo} alt="imagen" />
    //     </Col>
    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <h4> En nuestra MobilStore encontrarás<br />
    //         una gran variedad de móviles de<br />
    //         alta gama a un precio increíble.</h4>
    //     </Col>
    //   </Row>
    //   <Row>

    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <h4> Cómprate un móvil reacondicionado<br />
    //          al mejor precio y al mismo tiempo <br />
    //          cuida el medio ambiente.</h4>
    //     </Col>
    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <img className='imagenes' src={logo2} alt="imagen" />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <img className='imagenes' src={logo3} alt="imagen" />
    //     </Col>
    //     <Col sm={12} md={6}  className='d-flex justify-content-center align-items-center'>
    //       <h4> También contamos con un gran<br />
    //        soporte técnico y una garantía<br />
    //         de hasta dos años.</h4>
    //     </Col>
    //   </Row>
    // </Container>

  )
}

export default Home;