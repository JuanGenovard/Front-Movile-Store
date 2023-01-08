import './App.css';
import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Home from './Containers/Home/Home';
import Login from './Containers/LoginContainer/LoginContainer';
import Register from './Components/Register/Register';
import Movil from './Containers/Movil/Movil';
import SettingsUser from './Containers/SettingsContainer/SettingsContainer';
import { UserProvider } from './UserProvider';
import MovilDetail from './Containers/Movil/MovilDetails';
import Header from './Components/Header/Header';



function App() {
    return(
        <UserProvider>
                <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/movil/:id' element={<MovilDetail/>}/>
                    <Route path='/movil' element={<Movil/>}/>
                    <Route path ='/settings' element={<SettingsUser/>}/>
                </Routes>
                </BrowserRouter>
            </UserProvider>
    );
}

export default App;