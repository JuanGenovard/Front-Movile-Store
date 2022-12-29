import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';


function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col titulocol d-flex justify-content-center align-items-center">
          <p>MobileStore</p>
        </div>
      </div>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8 coltext">.col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4 colbotons">.col-6 .col-md-4</div>
      </div>

    </div>
  )
}

export default Home;