import React, { useEffect } from "react";
import state from '../../state';
import axios from "axios";
import { useState } from 'react'
import { useParams } from "react-router-dom";


// import './movilDetail.scss'


const MovilDetail = () => {
    const { id } = useParams();
    const token = localStorage.getItem('jwt');

    const [movil, setMovil] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3001/movils/${id}`).then(response => {
            setMovil(response.data)
            setCargando(false)
        })
    }, [])

    if (cargando) {
        return <div>Cargando</div>
    }

    return (
        movil ? <div>{movil.nombre}</div> : <div>No encontrado</div>
    );
}



export default MovilDetail;