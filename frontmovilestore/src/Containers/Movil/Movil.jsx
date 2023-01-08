import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import MovilBox from '../../Components/MovilBox/MovilBox';


const API_URL = "http://localhost:3001/movils/";
const API_URL_SEARCH = "https://proyectobackendpeliculas-production.up.railway.app/movies/search/";

export default function () {
  const [moviles, setMovil] = useState([]);
  const [search, setSearch] = useState(['']);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  useEffect(() => {
    if (search == '') {
      fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setMovil(data);
        })
    } else {
      fetch(API_URL_SEARCH + search)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setMovil(data);
        })
    }

  }, [search])

  console.log(moviles)

  return (
    <Container fluid className='containermovie'>
      <Row className='d-flex justify-content-center align-items-center mt-1'>
        <Col lg={6}>
          <Form>
            <Form.Control type='search' placeholder='Search' id='movieInput' onChange={(e) => searchHandler(e)}>
            </Form.Control>
          </Form>
        </Col>
      </Row>
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