import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
import './SettingsUser.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SettingsUser = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
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
        const { email, password, password2 } = form;
        const newErrors = {};
        if (password && !/[?=.*[0-9]]*/.test(password)) newErrors.password = 'Password must contain a number'
        if (password && !/[?=.*[a-z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 lower case'
        if (password && !/[?=.*[A-Z]]*/.test(password)) newErrors.password = 'Password must contain at least 1 upper case'
        if (password && !/[[a-zA-Z0-9]{8,}]*/.test(password)) newErrors.password = 'Password must contain at least 8 characters'

        if (password2 && password2 !== password) newErrors.password2 = 'The passwords do not match'

        return newErrors;
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            const token = localStorage.getItem("jwt");
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            axios.put("http://localhost:3001/usuarios/update/", form, config)
                .then(response => {
                    navigate('/')
                });
        }

    }

    return (
        <div className='contform m-0 p-0'>
            <Form className='Principal1'>
                <Form.Group controlId='nombre'>
                    <Form.Label className='words'>Email</Form.Label>
                    <Form.Control
                        placeholder='Enter email'
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                        className='input'
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='email'>
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label className='words'> Nueva contraseña</Form.Label>
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
                    <Form.Label className='words'>Repita la nueva contraseña</Form.Label>
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
        </div>




    )
}

export default SettingsUser;