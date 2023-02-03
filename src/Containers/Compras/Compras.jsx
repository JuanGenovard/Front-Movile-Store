import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Compras = () => {
    const API_URL = "http://localhost:3001/compras/";
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
        <table className='table'>
            <thead>
                <tr>
                    <th>gmail</th>
                    <th>fecha</th>
                    <th>id</th>
                </tr>
                {compras.map((compra) =>
                    <tr>
                        <td>
                            {compra.emailUsuario}<br />
                            </td>
                            <td>
                            {compra.createdAt}<br />
                            </td>
                            <td>
                            {compra.id_compra}<br />
                        </td>
                    </tr>
                )}

            </thead>
        </table>
    )
}


export default Compras;