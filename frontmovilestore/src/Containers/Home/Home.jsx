import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';


function Home() {
  return (
    <div className="cont container-fluid">
      <div className="row">
        <div className="col titulocol d-flex justify-content-center align-items-center">
          <p>MobileStore</p>
        </div>
      </div>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-6 coltext d-flex justify-content-center align-items-center">
          <div className='divtext1 d-flex justify-content-center align-items-center text'>
              ¡Estás en Movile Store,<br />
              la mejor web dedicada al<br />
              reacondicionado!
          </div>
        </div>
        <div class="col-sm-6 col-md-6 coltext d-flex flex-column justify-content-center align-items-center colbotons">
          <div className='divtext2 d-flex justify-content-center align-items-center'>
            <a>LOGIN</a>
          </div>
          <div className='divtext2 d-flex justify-content-center align-items-center'>
            <a>REGISTER</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;