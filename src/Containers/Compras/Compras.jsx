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
        <div>
            <div>
                <br />
                
                <table className='table d-flex justify-content-center align-items-center'>
                    <thead>
                    <h3>Compras realizadas</h3><br />
                        <tr>
                            <th width="100">id</th>
                            <th width="200">gmail</th>
                            <th width="100">fecha</th>

                        </tr>
                        {compras.map((compra) =>
                            <tr>
                                <td>
                                    {compra.id_compra}

                                </td>
                                <td>
                                    {compra.emailUsuario}

                                </td>
                                <td>
                                    {compra.createdAt}
                                </td>
                            </tr>
                        )}

                    </thead>
                </table>
            </div>
        </div>
    )
}


export default Compras;