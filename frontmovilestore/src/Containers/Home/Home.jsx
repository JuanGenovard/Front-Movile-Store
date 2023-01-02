import React from 'react'
import './Home.scss';


function Home() {
  return (
    <div className="cont container-fluid">
      <div className="row">
        <div className="col titulocol d-flex justify-content-center align-items-center">
          <div className='mobile'>Mobile</div>
          <div>Store</div>
        </div>
      </div>
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-6 coltext d-flex justify-content-center align-items-center">
          <div className='divtext1 d-flex justify-content-center align-items-center text'>
            ¡Estás en MovileStore,<br />
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
      <div className='cont2 container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 d-flex justify-content-center align-items-center'>
            <img src="../../img/barco-en-el-mar-dentro-de-una-botella_3840x2400_xtrafondos.com.jpg" alt="imagen" />
          </div>
          <div className='col-sm-6 col-md-6 d-flex justify-content-center align-items-center'>
            hola
            </div>
        </div>
      </div>
    </div>

  )
}

export default Home;