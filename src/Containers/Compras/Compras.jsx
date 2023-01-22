import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovilBox from '../../Components/MovilBox/MovilBox';


const Compras = () => {
    const API_URL = "https://proyectofinal-production-63cf.up.railway.app/compras/";
    const navigate = useNavigate()
    const token = localStorage.getItem("jwt");
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        if (isAdmin) {
            axios.get(API_URL, config)
                .then((res) => {
                    setCompras(res.data);
                })
        } else {
            navigate("/movil")
        }
    }, [])

    return (
        <Container>
            <Row className='d-flex'>
                {compras.map((compra) => {
                    return(
                    
                        <Col xs={12} sm={5} md={4} lg={3}>
                            <MovilBox>
                        {compra.emailUsuario}<br />
                        {compra.createdAt}<br />
                        {compra.id_compra}<br />
                        <img src={compra.movil.URL} /> 
                        </MovilBox>
                    
                        </Col>
                    
                    )
                }
                )}
            </Row>
        </Container>
    )
}


export default Compras;