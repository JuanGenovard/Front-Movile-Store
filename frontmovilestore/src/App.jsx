import './App.css';
import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './Containers/Home/Home';

function App() {
    return(
        <Container>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>

            </Routes>
            </BrowserRouter>
        </Container>

    );
}

export default App;