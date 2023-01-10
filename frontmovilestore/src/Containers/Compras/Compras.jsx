import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";
import axios from "axios";

const API_URL =  "http://localhost:3001/compras/";
const API_URL_Admin = "http://localhost:3001/compras/";

const Compras = () => {

    const username = localStorage.getItem('username'.toString());
    const token = localStorage.getItem("jwt");
    let isAdmin = false;
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const { decodedToken, isExpired } = useJwt(token);
    const [compras, setCompras] = useState([]);
    if (decodedToken) {
        if (decodedToken.role === 1) {
            isAdmin = true;
        }
    }

    const [comprasAdmin, setComprasAdmin] = useState([]);

        if (isAdmin == true) {
            axios.get(API_URL_Admin, config)
                .then((res) => {
                    setComprasAdmin(res.data);
                })
        } else {
            axios.get(API_URL, config)
                .then((res) => {
                    console.log(res.data);
                    setCompras(res.data);
                }
                )
        }

    if (token) {
        if (isAdmin == true) {
            return (
                <div>holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            )
        };
    }
}

export default Compras;