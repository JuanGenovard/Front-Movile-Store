import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:3001/compras/";

const Compras = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("jwt");
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    console.log(isAdmin)
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        if (isAdmin) {
            axios.get(API_URL, config)
                .then((res) => {
                    setCompras(res.data);
                    console.log(res.data)
                })
        } else {
            navigate("/movil")
        }
    }, [])

    return (
        <div>
            {compras.map((compra) =>
                <div>
                    {compra.emailUsuario}
                    {compra.fecha_compra}
                    {compra.id_compra}
                    <img src={compra.movil.URL}/>
                </div>
            )}
        </div>
    )
}


export default Compras;