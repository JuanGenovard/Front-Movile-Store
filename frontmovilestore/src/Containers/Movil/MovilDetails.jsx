import React from "react";
import state from '../../state';
import axios from "axios";
import { useState } from 'react'


// import './movilDetail.scss'


const MovilDetail = ({ movil }) => {
    const token=localStorage.getItem('jwt');
    const [error,setError]=useState('');


   function createOrderHandler(){
    const body={
        title:movil.title,
        type:"movil"
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("lol");
        axios.post("https://proyectobackendpeliculas-production.up.railway.app/orders/create", body,config)
        .then(response => {
            console.log("wtf");
            if (response.data.message=="You already have that item registered") {
                setError(response.data.message);
                console.log(error)
            }else{
                console.log("No error");
            }
            
        }).catch(error => {
            console.log(error);
            setError(error);

        });
    }


    return (
        <div>
            <div onClick={() => state.resetMovil()}>
                <h4 className="back">Back</h4>
            </div>
        <h1 className="texto">{movil.title}</h1>
        <img src={movil.url_img} />
        <p className="texto">{movil.synopsis}</p>
        <h3>{error}</h3>
        <button onClick={createOrderHandler}>Comprar</button>
        </div>
    );
    }



export default MovilDetail;