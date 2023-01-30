import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


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
        <div className='tabla'>
        <tr>
            {compras.map((compra) =>
                <td>
                    {compra.emailUsuario}<br />
                    {compra.createdAt}<br />
                    {compra.id_compra}<br />
                </td>
            )}
        </tr>
        </div>
    )
}


export default Compras;