import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Register.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const changeLogin = useUserToggleContext();

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
        const { nombre, email, contraseña, contraseña2 } = form;
        const newErrors = {};

        if (!nombre || nombre === 'Enter nombre') newErrors.nombre = 'Please enter a nombre'
        if (!email || email === 'Enter email') {
            newErrors.email = 'Please enter an email'
        } else if (!/.+\@.+\..+/.test(email)) newErrors.email = 'Please input a valid email'
        // if (!dob || dob === '') newErrors.dob = 'Please enter your date of birth'
        if (!contraseña || contraseña === 'Enter your contraseña') newErrors.contraseña = 'Please enter a contraseña'
        else {
            if (!/[?=.*[0-9]]*/.test(contraseña)) newErrors.contraseña = 'contraseña must contain a number'
            if (!/[?=.*[a-z]]*/.test(contraseña)) newErrors.contraseña = 'contraseña must contain at least 1 lower case'
            if (!/[?=.*[A-Z]]*/.test(contraseña)) newErrors.contraseña = 'contraseña must contain at least 1 upper case'
            if (!/[[a-zA-Z0-9]{8,}]*/.test(contraseña)) newErrors.contraseña = 'contraseña must contain at least 8 characters'
        }

        if (!contraseña2 || contraseña2 === 'Repeat your contraseña') newErrors.contraseña2 = 'Please repeat your contraseña'
        else if (contraseña2 !== contraseña) newErrors.contraseña2 = 'The contraseñas do not match'

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log(formErrors);
        } else {
            console.log("submited form")
            e.preventDefault()
            console.log(form);
            let registerbody = JSON.stringify(form)
            console.log(registerbody)
            axios.post("http://localhost:3001/auth/nuevousuario", form)
                .then(response => {
                    console.log(response);
                    if (response) {
                        console.log("Intentando login");
                        const body = {
                            email: form.email,
                            contraseña: form.contraseña,
                            nombre: form.nombre
                        }
                        console.log(body)
                        axios.post("http://localhost:3001/auth/login", body)
                            .then(response => {
                                localStorage.setItem('jwt', JSON.stringify(response.data.jwt));
                                localStorage.setItem('nombre', response.data.nombre);
                                localStorage.setItem('isAdmin', response.data.admin);
                                changeLogin(response.data.nombre, response.data.admin);
                                navigate("/");
                            });
                    }
                });

        }
    }

    return (
        <div className='contform'>
            <Form className='Principal1'>
                <Form.Group controlId='nombre'>
                    <Form.Label className='words'>nombre</Form.Label>
                    <Form.Control
                        placeholder='Enter username'
                        value={form.nombre}
                        onChange={(e) => setField('nombre', e.target.value)}
                        isInvalid={!!errors.nombre}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.nombre}

                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label className='words'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='contraseña' className='contraseña'>
                    <Form.Label className='words'>contraseña</Form.Label>

                    <Form.Control
                        type='password'
                        placeholder='Enter your password'
                        value={form.contraseña}
                        onChange={(e) => setField('contraseña', e.target.value)}
                        isInvalid={!!errors.contraseña}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.contraseña};

                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='contraseña2'>
                    <Form.Label className='words'>Repeat contraseña</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Repeat your password'
                        value={form.contraseña2}
                        onChange={(e) => setField('contraseña2', e.target.value)}
                        isInvalid={!!errors.contraseña2}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.contraseña2}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='submit'>
                    <Button className='Boton' type='submit'
                        onClick={handleSubmit} >
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

export default Register;