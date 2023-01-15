import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import MovilBox from '../../Components/MovilBox/MovilBox';


const API_URL = "https://proyectofinal-production-63cf.up.railway.app/movils/";
const API_URL_SEARCH = "https://proyectofinal-production-63cf.up.railway.app/movils/";

export default function () {
  const [moviles, setMovil] = useState([]);
  const [search, setSearch] = useState(['']);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search == '') {
      fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
          setMovil(data);
        })
    } else {
      fetch(API_URL_SEARCH + search)
        .then((res) => res.json())
        .then(data => {
          setMovil(data);
        })
    }

  }, [search])


  return (
    <Container>
      <Row className='d-flex'>
        {moviles.map((movil) => {
          return (
            <Col xs={12} sm={5} md={4} lg={3}>
              <MovilBox key={movil.title} movil={movil} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
