import './App.css';
import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './Containers/Home/Home';
import Login from './Containers/LoginContainer/LoginContainer';


function App() {
    return(
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            </BrowserRouter>
        
        

    );
}

export default App;