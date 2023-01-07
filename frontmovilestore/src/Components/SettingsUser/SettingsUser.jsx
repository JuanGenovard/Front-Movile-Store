import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './SettingsUser.scss'
import axios from "axios";


const SettingsUser = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    // axios.defaults.headers.put['Authorization'] = `Bearer ${localStorage.getItem('jwt').toString()}`;
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })
    }

    const validateForm = () => {
        const { username, email, password, password2 } = form;
        const newErrors = {};
        if (password && !/[?=.*[0-9]]*/.test(password)) newErrors.password = 'Password must contain a number'
        if (password && !/[?=.*[a-z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 lower case'
        console.log(newErrors)
        if (password && !/[?=.*[A-Z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 upper case'
        if (password && !/[[a-zA-Z0-9]{8,}]*/.test(password)) newErrors.password = 'Password must contain at least 8 characters'

        if (password2 && password2 !== password) newErrors.password2 = 'The passwords do not match'

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("submited form")
            const token = localStorage.getItem("jwt");
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            axios.put("http://localhost:3001/auth/login", form, config)
                .then(response => {
                    console.log(response);
                });
        }

        console.log(form);
    }

    return (
        <div className='contform'>
            <Form className='Principal1'>
                <Form.Group controlId='nombre'>
                    <Form.Label className='words'>Username</Form.Label>
                    <Form.Control
                        placeholder='Enter username'
                        value={form.username}
                        onChange={(e) => setField('username', e.target.value)}
                        isInvalid={!!errors.nombre}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.nombre}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label className='words'> New Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter your password'
                        value={form.password}
                        onChange={(e) => setField('password', e.target.value)}
                        isInvalid={!!errors.password2}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='contraseña2'>
                    <Form.Label className='words'>Repeat New Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Repeat your password'
                        value={form.password2}
                        onChange={(e) => setField('contraseña2', e.target.value)}
                        isInvalid={!!errors.password2}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.password2}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='CBoton' controlId='submit'>
                    <Button type='submit'
                        onClick={handleSubmit}
                        className='Boton' >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <div className="coltext d-flex flex-column justify-content-center align-items-center colbotons">
                <div className='botonhome d-flex justify-content-center align-items-center'>
                    <a href='/'>HOME</a>
                </div>
                <div className='botonhome d-flex justify-content-center align-items-center'>
                    <a href='/movil'>MOVIL</a>
                </div>
            </div>
        </div>




    )
}

export default SettingsUser;